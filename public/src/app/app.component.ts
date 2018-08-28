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
  ngOnInit(){
  console.log('hi');
   this._httpService.allSchedule().subscribe(data=>{
    console.log("the consoel log is", data[0]);
    
    this.schedule = data[0];
    console.log("this.schedule", this.schedule);
    if(data){
      this.hasSchedule = true;
    }
    else{
      this.hasSchedule = false;
    }
})
  }
}