import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {RadarsService} from "../../services/radars.service";
import {Radar} from "../../models/radar.model";
import {Vehicle} from "../../models/vehicle.model";
import {Chart, registerables} from 'chart.js';
import * as moment from "moment";
import {OverSpeed} from "../../models/over-speed";
import {VehiclesService} from "../../services/vehicles.service";
import Swal from 'sweetalert2';

Chart.register(...registerables);

@Component({
  selector: 'app-order-details',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  vehicles: any[] = [];

  constructor(private http: HttpClient, private router: Router,
              private route: ActivatedRoute, private vehiclesService: VehiclesService) {
    //this.orderId=route.snapshot.params['orderId'];
  }

  ngOnInit() {
    this.vehiclesService.getAllVehicles().subscribe((data: Vehicle[]) => {
        this.vehicles = data;
        console.log(this.vehicles);
      }
    );
  }

  ngAfterViewInit() {

  }


  showOwners(registrationNumber: any) {
    this.vehiclesService.getVehicleOwners(registrationNumber).subscribe((data: any[]) => {
        console.log(data);
        let owners = '';
        // @ts-ignore
        data.ownerShips.forEach(o => owners += 'Name : '
          + o.vehicleOwner.ownerName + '<br>' + 'CIN : '
          + o.vehicleOwner.ownerNationalIdCard + '<br>'
          + 'Email : ' + o.vehicleOwner.ownerEmail
          + '<br>' + 'GSM : ' + o.vehicleOwner.ownerPhoneNumber + '<br><br>');
        Swal.fire({
            title: 'Owners :',
            html: owners,
            icon: 'info',
            confirmButtonText: 'Ok'
          }
        );
      }
    );
  }

  addNewVehicle() {
    this.router.navigateByUrl("/add-vehicle");
  }
}
