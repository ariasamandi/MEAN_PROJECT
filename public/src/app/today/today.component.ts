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
    this.getBreakfast();
    this.getLunch();
    this.getDinner();
   this._http.sessionUser().subscribe(data=>{
     console.log("data", data['schedule'][0]);
     this.schedule = data['schedule'][0];
     
   })
}
  getBreakfast(){
    this._http.sessionUser().subscribe(all=>{
      console.log("all:", all)
      this.Breakfast = all['schedule'][0]['Breakfast'];
      console.log("this is brakwfast", this.Breakfast)
    })
    
  }
  getLunch(){
    this._http.sessionUser().subscribe(all=>{
      console.log("all:", all)
      this.Lunch = all['schedule'][0]['Lunch'];
      console.log("this is Lunch", this.Lunch)
    })
  }
  getDinner(){
    this._http.sessionUser().subscribe(all=>{
      console.log("all:", all)
      this.Dinner = all['schedule'][0]['Dinner'];
      console.log("this is Dinner", this.Dinner)
    })
  }
  getSchedule(id){
    this._http.singleSchedule(id).subscribe(single=>{
      console.log("this is da single", single);
      console.log("todays my birthdsy", this.schedule)
    })
  }
  
}
