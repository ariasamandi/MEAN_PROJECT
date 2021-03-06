import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService,private _http: HttpClient){}
  title = 'To Your Workout Schedule';
  hasSchedule = true;
  schedule: any;
  user: any;
  ngOnInit(){
   this._httpService.allSchedule().subscribe(data=>{
    
    this.schedule = data[0];
    if(data){
      this.hasSchedule = true;
    }
    else{
      this.hasSchedule = false;
    }
})
this._httpService.sessionUser().subscribe(data=>{
  console.log(data);
  this.user = data;
})
  }
}