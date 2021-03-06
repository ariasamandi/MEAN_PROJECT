import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { Chart } from 'chart.js';
import { NumberFormatStyle } from '@angular/common';
import {Router} from '@angular/router'
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor(private _http: HttpService, private _router: Router) { }
  Breakfast: any;
  calories: any;
  protein: any;
  carbs: any;
  fats: any;
  chart: any;
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
    this.sum();
    // this.setchart();
    
  }
  sum(){
    this.calories = 0;
    this.protein = 0;
    this.carbs = 0;
    this.fats = 0;
    this._http.sessionUser().subscribe((all:any)=>{
      console.log(all['schedule'][0]['Breakfast'])
      if(all['schedule'][0]['Breakfast'][0] != undefined){
        console.log(all['schedule'][0]['Breakfast'][0].calories);
        console.log("the length is", all['schedule'][0]['Breakfast'].length)
        for(var i = 0; i < all['schedule'][0]['Breakfast'].length; i++){
          this.calories += all['schedule'][0]['Breakfast'][i].calories;
          this.protein += all['schedule'][0]['Breakfast'][i].protein;
          this.carbs += all['schedule'][0]['Breakfast'][i].carbs;
          this.fats += all['schedule'][0]['Breakfast'][i].fat;
          console.log(this.fats, "breakfast fats")
        }
      }
      if(all['schedule'][0]['Lunch'][0] != undefined){
        console.log(this.protein, "breakfast protein")
        console.log(all['schedule'][0]['Lunch'][0].calories);
        console.log("the length is", all['schedule'][0]['Lunch'].length)
        for(var i = 0; i < all['schedule'][0]['Lunch'].length; i++){
          this.calories += all['schedule'][0]['Lunch'][i].calories;
          this.protein += all['schedule'][0]['Lunch'][i].protein;
          this.carbs += all['schedule'][0]['Lunch'][i].carbs;
          this.fats += all['schedule'][0]['Lunch'][i].fat;
        }
      }
      if(all['schedule'][0]['Dinner'][0] != undefined){
        console.log(all['schedule'][0]['Dinner'].calories);
        console.log("the length is", all['schedule'][0]['Dinner'].length)
        for(var i = 0; i < all['schedule'][0]['Dinner'].length; i++){
          this.calories += all['schedule'][0]['Dinner'][i].calories;
          this.protein += all['schedule'][0]['Dinner'][i].protein;
          this.carbs += all['schedule'][0]['Dinner'][i].carbs;
          this.fats += all['schedule'][0]['Dinner'][i].fat;
        }   
          }
          this.setchart();
          var p = this.protein;
          console.log(this.fats, "dinner fats")
    })
      
      
      console.log(this.calories)
      console.log(this.protein, "protein")
      console.log(this.fats, "fats")
      console.log(this.carbs, "carbs")
      
      
  }
  setchart(){
    
    console.log(this.protein, "chart protien")
    var protein = this.protein;

    
    var fats = this.fats;
    var carbs = this.carbs;
    console.log("protein", protein, this.protein, "fats", fats, this.fats, "carbs", carbs, this.carbs);
    this.chart = new Chart("pie", {
      type:'pie', //bar, pie, horizontal, line, doughnut, radar , polar
            data: {
                labels: ['Carbs', 'Protein', 'Fats'],
                datasets: [{
                    label: 'population',
                    data: [
                        carbs,
                        protein,
                        fats,
                    ],
                     backgroundColor: 
                    [
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                    ],
                    borderWidth: 4,
                    borderColor: '#777'
                }]
            },
            options: {}
        });
  }
}
