import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RadarsListComponent} from "./pages/radars-list/radars-list.component";
import {VehiclesListComponent} from "./pages/vehicles-list/vehicles-list.component";
import {AddRadarComponent} from "./pages/add-radar/add-radar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AddVehicleComponent} from "./pages/add-vehicle/add-vehicle.component";
import {InfractionsListComponent} from "./pages/infractions-list/infractions-list.component";

@NgModule({
  declarations: [
    AppComponent,
    RadarsListComponent,
    VehiclesListComponent,
    AddRadarComponent,
    AddVehicleComponent,
    InfractionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
