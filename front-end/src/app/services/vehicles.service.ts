import {HttpClient} from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class VehiclesService {

  constructor(private http: HttpClient, private zone: NgZone, ) {
  }

  getAllVehicles() {
    return this.http.get<any>(environment.api + '/IMMATRICULATION-QUERY/query/vehicles/all');
  }

  addVehicle(value: any) {
    return this.http.post<any>(environment.api + '/IMMATRICULATION-COMMAND/commands/vehicles/create', value);
  }

  getVehicleOwners(registrationNumber: any) {
    return this.http.get<any>(environment.api + '/IMMATRICULATION-QUERY/query/vehicles/byRegNumber/' + registrationNumber);
  }
}



