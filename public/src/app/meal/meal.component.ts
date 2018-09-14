import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from './../http.service';
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  newFood: any;
  schedule: any;
  Breakfast: any;
  constructor(private _http: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(data=>{
      this.getSchedule(data['id'])
    })
  }
  getSchedule(id){
    this._http.singleSchedule(id).subscribe(single=>{
      this.schedule = single;
    })
  }

}
