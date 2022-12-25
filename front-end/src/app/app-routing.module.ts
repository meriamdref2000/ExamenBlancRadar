import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RadarsListComponent} from "./pages/radars-list/radars-list.component";
import {VehiclesListComponent} from "./pages/vehicles-list/vehicles-list.component";
import {AddRadarComponent} from "./pages/add-radar/add-radar.component";
import {AddVehicleComponent} from "./pages/add-vehicle/add-vehicle.component";
import {InfractionsListComponent} from "./pages/infractions-list/infractions-list.component";

const routes: Routes = [
  { path: '', redirectTo: '/radars', pathMatch: 'full' },
  {
    path : "add-radar" , component : AddRadarComponent
  },
  {
    path : "add-vehicle" , component : AddVehicleComponent
  },
  {
    path : "radars" , component : RadarsListComponent
  },
  {
    path : "infractions" , component : InfractionsListComponent
  },
  {
    path : "vehicles" , component : VehiclesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
