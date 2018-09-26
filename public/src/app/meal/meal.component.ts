import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from './../http.service';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  
  constructor(private _http: HttpService, private _route: ActivatedRoute) { }
  newFood: any={};
  schedule: any;
  Breakfast: any;
  ngOnInit() {
    console.log("before", this.Breakfast)
    this.getBreakfast();
    console.log("final", this.Breakfast)
    
    // this._route.params.subscribe(data=>{
    //   this.getSchedule(data['id'])
    //   console.log("this is da params", data['id']);
    //   console.log(this.schedule);
    // })
  }
  // getSchedule(id){
  //   this._http.singleSchedule(id).subscribe(single=>{
  //     console.log("this is da single", single);
  //     this.schedule = single;
  //     console.log("todays my birthdsy", this.schedule)
  //   })
  // }
  getBreakfast(){
    this._http.allBreakfast().subscribe(all=>{
      this.Breakfast = all;
      console.log("this is brakwfast", this.Breakfast)
    })
  }
}
