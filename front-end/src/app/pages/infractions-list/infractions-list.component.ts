import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Vehicle} from "../../models/vehicle.model";
import {Chart, registerables} from 'chart.js';
import {InfractionsService} from "../../services/infractions.service";
import Swal from "sweetalert2";

Chart.register(...registerables);

@Component({
  selector: 'app-order-details',
  templateUrl: './infractions-list.component.html',
  styleUrls: ['./infractions-list.component.css']
})
export class InfractionsListComponent implements OnInit {
  infractions: any[] = [];

  constructor(private http: HttpClient, private router: Router,
              private route: ActivatedRoute, private infractionsService: InfractionsService) {
  }

  ngOnInit() {
    this.infractionsService.getAllInfractions('').subscribe((data: Vehicle[]) => {
      // @ts-ignore
      this.infractions = data.content;
      console.log(this.infractions);
    });
  }


  async showInfractions() {
    const {value: text} = await Swal.fire({
      title: 'Veuillez entrer le CIN du propriété :',
      input: 'text',
      inputLabel: 'CIN',
      inputPlaceholder: ''
    });
    return text;
  }
}
