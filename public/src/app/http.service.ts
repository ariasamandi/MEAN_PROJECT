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
   singleSchedule(id: any){
     return this._http.get(`/api/show/${id}`)
   }
   createFood(newFood: any){
     return this._http.post('api/create/food', newFood)
   }
   allBreakfast(){
     return this._http.get(`api/breakfast`)
   }
}
