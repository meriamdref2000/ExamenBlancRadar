import {HttpClient} from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class InfractionsService {

  constructor(private http: HttpClient, private zone: NgZone, ) {
  }

  getAllInfractions(cin: any) {
    return this.http.get<any>(environment.api + '/INFRACTION-QUERY/query/infractions?cin='+cin);
  }

}



