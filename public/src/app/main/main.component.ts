import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private _httpService: HttpService,private _http: HttpClient){}
  title = 'To Your Workout Schedule';
  hasSchedule = true;
  schedule: any;
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
  }
}
