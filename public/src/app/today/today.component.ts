import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  constructor(private _http: HttpService) { }
  Breakfast: any;
  ngOnInit() {
    this.getBreakfast();
  }
  getBreakfast(){
    this._http.allBreakfast().subscribe(all=>{
      this.Breakfast = all;
      console.log("this is brakwfast", this.Breakfast)
    })
  }
}
