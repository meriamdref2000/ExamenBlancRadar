import {HttpClient} from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class RadarsService {


  constructor(private http: HttpClient, private zone: NgZone, ) {
  }

  getAllRadars() {
    return this.http.get<any>(environment.api + '/RADAR-QUERY/query/radars/all');
  }

  activateRadar(radarId: any) {
    return this.http.post<any>(environment.api + '/RADAR-COMMAND/commands/radar/activate/' + radarId, {});
  }

  addRadar(radar: any){
    return this.http.post<any>(environment.api + '/RADAR-COMMAND/commands/radar/create', radar);
  }

  watchOverSpeed() {
    return this.http.get<any>(environment.api + '/RADAR-QUERY/query/watchOverSpeeds');
  }

  getMessages(): Observable<any> {
    return Observable.create(
        (observer: { next: (arg0: any) => void; error: (arg0: Event) => void; }) => {
        let source = new EventSource(environment.api + '/RADAR-QUERY/query/watchOverSpeeds');
        source.onmessage = event => {
          this.zone.run(() => {
            observer.next(event.data)
          })
        }
        source.onerror = event => {
          this.zone.run(() => {
            observer.error(event)
          })
        }
      }
    )
  }
}



