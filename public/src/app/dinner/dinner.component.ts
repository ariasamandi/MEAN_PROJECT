import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from './../http.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent implements OnInit {

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) { }
  newFood: any={};
  schedule: any;
  Dinner: any;
  errors=[];
  ngOnInit() {
    this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
    console.log("before", this.Dinner)
    this.getDinner();
    console.log("final", this.Dinner)
    this.getSchedule();
  }
  getSchedule(){
    this._http.sessionUser().subscribe(sesh=>{
      console.log("this is sesh", sesh['schedule'][0])
      this.schedule = sesh['schedule'][0];
    })
  }
  getDinner(){
    this._http.sessionUser().subscribe(all=>{
      console.log("all", all['schedule'][0]['Dinner'])
      this.Dinner = all['schedule'][0]['Dinner'];
      // console.log("this is brakwfast", this.Breakfast.schedule[0].Breakfast)
    })
  }
  addFood(){
    console.log("Start of add food function")
    this._http.createDinner(this.newFood, this.schedule['_id']).subscribe(data=>{
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
      this.getDinner()
      this._router.navigate([`/dinner/${this.schedule._id}`])
      console.log('this is da data', data)
      }
    })
  }
}
