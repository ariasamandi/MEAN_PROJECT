import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from './../http.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  Breakfast: any;
  Lunch: any;
  Dinner: any;
  schedule: any;
  ngOnInit() {
    this.getBreakfast();
    this.getLunch();
    this.getDinner();
    this._route.params.subscribe(data=>{
      this.getSchedule(data['id'])
      console.log("this is da params", data['id']);
      this.schedule = data['id']
      console.log("this is dat schedule", this.schedule);
  })
}
  getBreakfast(){
    this._http.allBreakfast().subscribe(all=>{
      this.Breakfast = all;
      console.log("this is brakwfast", this.Breakfast)
    })
    
  }
  getLunch(){
    this._http.allLunch().subscribe(all=>{
      this.Lunch = all;
      console.log("this is brakwfast", this.Lunch)
    })
  }
  getDinner(){
    this._http.allDinner().subscribe(all=>{
      this.Dinner = all;
      console.log("this is dinner", this.Dinner)
    })
  }
  getSchedule(id){
    this._http.singleSchedule(id).subscribe(single=>{
      console.log("this is da single", single);
      console.log("todays my birthdsy", this.schedule)
    })
  }
  
}
