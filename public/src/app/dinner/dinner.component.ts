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
  ngOnInit() {
    this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
    console.log("before", this.Dinner)
    this.getDinner();
    console.log("final", this.Dinner)
    
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
  getDinner(){
    this._http.allDinner().subscribe(all=>{
      this.Dinner = all;
      console.log("this is dinner", this.Dinner)
    })
  }
  addFood(){
    this._http.createDinner(this.newFood, this.schedule).subscribe(data=>{
      console.log('this is da data', data)
      this.newFood = {name: "", calories: "", protein: "", fat: "", carbs: ""};
      this.getDinner()
      this._router.navigate([`/dinner/${this.schedule}`])
      console.log('this is da data', data)
    })
  }
}
