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
  errors=[];
  logged: any;
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
  delete(b){
    this._http.deleteLunch(b).subscribe(data=>{
      console.log(data);
      this.getLunch();
    })
  }
  addFood(){
    console.log("Start of add food function")
    this._http.createLunch(this.newFood, this.schedule['_id']).subscribe(data=>{
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
      this.getLunch()
      this._router.navigate([`/lunch/${this.schedule._id}`])
      console.log('this is da data', data)
      }
    })
  }
}
