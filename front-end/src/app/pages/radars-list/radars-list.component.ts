import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {RadarsService} from "../../services/radars.service";
import {Radar} from "../../models/radar.model";
import {Chart, registerables} from 'chart.js';
import * as moment from "moment";
import {OverSpeed} from "../../models/over-speed";

Chart.register(...registerables);

@Component({
  selector: 'app-order-details',
  templateUrl: './radars-list.component.html',
  styleUrls: ['./radars-list.component.css']
})
export class RadarsListComponent implements OnInit {
  chart: any;
  radars: Radar[] = [];
  totalRadarsNumber: number = 0;
  activeRadarsNumber: number = 0;
  inactiveRadarsNumber: number = 0;
  overs: OverSpeed[] = [];
  labels = [];
  data = [];

  constructor(private http: HttpClient, private router: Router,
              private route: ActivatedRoute, private radarService: RadarsService) {
    //this.orderId=route.snapshot.params['orderId'];
  }

  ngOnInit() {
    this.radarService.getAllRadars().subscribe((data: Radar[]) => {
        this.radars = data;
        this.totalRadarsNumber = data.length;
        this.activeRadarsNumber = data.filter(r => r.radarStatus == 'ACTIVE').length;
        this.inactiveRadarsNumber = this.totalRadarsNumber - this.activeRadarsNumber;
        console.log(this.radars);
      }
    );
  }

  ngAfterViewInit() {
    this.createChart();
    this.radarService.getMessages().subscribe({
      next: data => {
        let element = JSON.parse(data);
        this.overs.push(element);
        console.log(element);
        this.chart.data.labels.push(moment(element.timestamp).unix());
        this.chart.data.datasets[0].data.push(element.vehicleSpeed);
        this.chart.update();
      },
      error: err => console.error(err)
    });
  }

  getOrderDetails(o: any) {
    this.router.navigateByUrl("/order-details/" + o.id);

  }

  activateRadar(radarId: any) {
    this.radarService.activateRadar(radarId).subscribe((data: any) => {
      console.log(data);
    });
  }

  private createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Dataset 1',
          data: [],
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)'
          ]
        }]
      },
      options: {
        aspectRatio: 1.5
      }

    });
  }

  addNewRadar() {
    this.router.navigateByUrl("/add-radar");
  }
}
