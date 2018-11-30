import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from './../http.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  newFood: any={};
  schedule: any;
  Lunch: any;
  ngOnInit() {
    this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
    console.log("before", this.Lunch)
    this.getLunch();
    console.log("final", this.Lunch)
    this.getSchedule();
  }
  getSchedule(){
    this._http.sessionUser().subscribe(sesh=>{
      console.log("this is sesh", sesh['schedule'][0])
      this.schedule = sesh['schedule'][0];
    })
  }
  getLunch(){
    this._http.sessionUser().subscribe(all=>{
      console.log("all", all['schedule'][0]['Lunch'])
      this.Lunch = all['schedule'][0]['Lunch'];
      // console.log("this is brakwfast", this.Breakfast.schedule[0].Breakfast)
    })
  }
  addFood(){
    console.log("Start of add food function")
    this._http.createLunch(this.newFood, this.schedule['_id']).subscribe(data=>{
      console.log('this is da data', data)
      this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
      this.getLunch()
      this._router.navigate([`/lunch/${this.schedule._id}`])
      console.log('this is da data', data)
    })
  }
}
