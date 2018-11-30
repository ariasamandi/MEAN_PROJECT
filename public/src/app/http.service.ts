import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
   addSchedule(newSchedule: any){
     console.log(newSchedule, "service loaded");
     return this._http.post('/api/create/schedule', newSchedule);
   }
   allSchedule(){
     return this._http.get('/api/schedule');
   }
   singleSchedule(id: any){
     return this._http.get(`/api/show/${id}`);
   }
   createBreakfast(newFood: any, s_id: string){
     console.log("we got to the createBreakfast server")
     console.log(s_id)
     return this._http.post(`/api/create/breakfast/${s_id}`, newFood);
   }
   createLunch(newFood: any, s_id: string){
     console.log("Lunch Service")
     return this._http.post(`/api/create/lunch/${s_id}`, newFood);
   }
   createDinner(newFood: any, s_id: string){
     return this._http.post(`/api/create/dinner/${s_id}`, newFood);
   }
   allBreakfast(){
     return this._http.get(`/api/breakfast`);
   }
   allLunch(){
     return this._http.get(`api/lunch`);
   }
   allDinner(){
     return this._http.get(`/api/dinner`);
   }
   es(edited){
     console.log(edited, "from service");
     return this._http.put(`/api/schedule/edit/${edited._id}`, edited);
   }
   login(s){
     console.log("service")
     return this._http.post(`/api/login`, s);
   }
   register(s){
     return this._http.post(`/api/register`, s);
   }
   sessionUser(){
     console.log("service sessionuser")
    return this._http.get(`api/session/`)
   }
   register2(){
     return this._http.get('api/register');
   }
}
