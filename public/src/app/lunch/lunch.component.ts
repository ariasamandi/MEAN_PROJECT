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
    
    this._route.params.subscribe(data=>{
      this.getSchedule(data['id'])
      console.log("this is da params", data['id']);
      this.schedule = data['id']
      console.log("this is dat schedule", this.schedule);
    })
  }
  getSchedule(id){
    this._http.singleSchedule(id).subscribe(single=>{
      console.log("this is da single", single);
      console.log("todays my birthdsy", this.schedule)
    })
  }
  getLunch(){
    this._http.allLunch().subscribe(all=>{
      this.Lunch = all;
      console.log("this is brakwfast", this.Lunch)
    })
  }
  addFood(){
    this._http.createLunch(this.newFood, this.schedule).subscribe(data=>{
      console.log('this is da data', data)
      this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
      this.getLunch()
      this._router.navigate([`/lunch/${this.schedule}`])
      console.log('this is da data', data)
    })
  }
}
