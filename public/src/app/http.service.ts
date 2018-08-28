import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
   addSchedule(newSchedule: any){
     return this._http.post('/api/create/schedule', newSchedule);
   }
   allSchedule(){
     return this._http.get('/api/schedule')
   }
   singleSchedule(schedule: any){
     return this._http.get(`/api/show/${schedule.id}`)
   }
}
