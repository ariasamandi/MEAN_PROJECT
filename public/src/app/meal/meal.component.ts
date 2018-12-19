import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from './../http.service';
import {Router} from '@angular/router'
declare var $:any;
@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  
  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  newFood: any={};
  schedule: any;
  Breakfast: any;
  errors = [];
  logged:any;
  ngOnInit() {
    this._http.sessionUser().subscribe(hi=>{
      if(!hi){
        this._router.navigate([`/`])
      }
      else{
        this.logged = true;
      }
    })
    this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
    console.log("before", this.Breakfast)
    this.getBreakfast();
    console.log("final", this.Breakfast)
    this.getSchedule();
  }
  getSchedule(){
    this._http.sessionUser().subscribe(sesh=>{
      console.log("this is sesh", sesh['schedule'][0])
      this.schedule = sesh['schedule'][0];
    })
  }
  getBreakfast(){
    this._http.sessionUser().subscribe(all=>{
      console.log("all", all['schedule'][0]['Breakfast'])
      this.Breakfast = all['schedule'][0]['Breakfast'];
      // console.log("this is brakwfast", this.Breakfast.schedule[0].Breakfast)
    })
  }
  delete(b){
    this._http.deleteBreakfast(b).subscribe(data=>{
      console.log(data);
      this.getBreakfast();
    })
  }
  addFood(){
    console.log("Start of add food function")
    this._http.createBreakfast(this.newFood, this.schedule['_id']).subscribe(data=>{
      this.errors = [];
      if(data['errors']){
        for(var key in data['errors']){
          console.log(data['errors'][key]['message']);
          this.errors.push(data['errors'][key]['message']);
          
        }
      }
      else{
        console.log('this is da data', data)
        this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
        this.getBreakfast()
        this._router.navigate([`/meal/${this.schedule._id}`])
        console.log('this is da data', data)
      }
    })
  }

  searchItem(){
  $('#itemFor').addClass('testFor');
    
  }
}
