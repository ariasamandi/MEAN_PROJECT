import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor(private _http: HttpService) { }
  Breakfast: any;
  calories: any;
  protein: any;
  carbs: any;
  fats: any;

  ngOnInit() {
    this.sum();
  }
  sum(){
    this.calories = 0;
    this.protein = 0;
    this.carbs = 0;
    this.fats = 0;
    this._http.allBreakfast().subscribe(all=>{
      console.log(all[0].calories);
      console.log("the length is", all.length)
      for(var i = 0; i < all.length; i++){
        this.calories += all[i].calories;
        this.protein += all[i].protein;
        this.carbs += all[i].carbs;
        this.fats += all[i].fat;

      }
    })
      this._http.allLunch().subscribe(all=>{
        console.log(all[0].calories);
        console.log("the length is", all.length)
        for(var i = 0; i < all.length; i++){
          this.calories += all[i].calories;
          this.protein += all[i].protein;
          this.carbs += all[i].carbs;
          this.fats += all[i].fat;
  
        }
      })
        this._http.allDinner().subscribe(all=>{
          console.log(all[0].calories);
          console.log("the length is", all.length)
          for(var i = 0; i < all.length; i++){
            this.calories += all[i].calories;
            this.protein += all[i].protein;
            this.carbs += all[i].carbs;
            this.fats += all[i].fat;
    
          }
        })
      console.log(this.calories)
  }
  getBreakfast(){
    this._http.allBreakfast().subscribe(all=>{
      this.Breakfast = all;
      console.log("this is brakwfast", this.Breakfast)
    })
  }
}
