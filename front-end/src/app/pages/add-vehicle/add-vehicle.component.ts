import {Component, OnInit} from '@angular/core';
import {RadarsService} from "../../services/radars.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
import {VehiclesService} from "../../services/vehicles.service";

@Component({
  selector: 'app-radars-list',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  radars: any = [];
  radarForm!: FormGroup;

  constructor(private vehiclesService: VehiclesService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.radarForm = this.formBuilder.group({
      registrationNumber: this.formBuilder.control('', [Validators.required]),
      type: this.formBuilder.control('', [Validators.required]),
      brand: this.formBuilder.control('', [Validators.required]),
      model: this.formBuilder.control('', [Validators.required]),
      fiscalPower: this.formBuilder.control(0, [Validators.required]),
      ownerName: this.formBuilder.control('', [Validators.required]),
      ownerNationalIdCard: this.formBuilder.control('', [Validators.required]),
      ownerEmail: this.formBuilder.control('', [Validators.required]),
      ownerPhoneNumber: this.formBuilder.control('', [Validators.required]),
      ownerAddress: this.formBuilder.control('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.radarForm.value);
    this.vehiclesService.addVehicle(this.radarForm.value).subscribe((data: any) => {
      this.radarForm.reset();
      Swal.fire({
        title: 'Success!',
        text: 'Radar added successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }, error => {
      this.radarForm.reset();
      Swal.fire({
        title: 'Error!',
        text: 'Radar not added',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    });
  }
}
