import {Component, OnInit} from '@angular/core';
import {RadarsService} from "../../services/radars.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-radars-list',
  templateUrl: './add-radar.component.html',
  styleUrls: ['./add-radar.component.css']
})
export class AddRadarComponent implements OnInit {

  radars: any = [];
  radarForm!: FormGroup;

  constructor(private radarsService: RadarsService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.radarForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      latitude: this.formBuilder.control(0, [Validators.required]),
      longitude: this.formBuilder.control(0, [Validators.required]),
      altitude: this.formBuilder.control(0, [Validators.required]),
      roadDesignation: this.formBuilder.control('', [Validators.required]),
      maxSpeed: this.formBuilder.control(0, [Validators.required]),
      radarStatus: this.formBuilder.control('ACTIVE', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.radarForm.value);
    this.radarsService.addRadar(this.radarForm.value).subscribe((data: any) => {
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
