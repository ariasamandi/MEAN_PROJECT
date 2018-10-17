import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { Chart } from 'chart.js';
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
  chart: any;

  ngOnInit() {
    this.sum();
    this.setchart();
    console.log("chart", this.chart);
    
  }
  sum(){
    this.calories = 0;
    this.protein = 0;
    this.carbs = 0;
    this.fats = 0;
    this._http.allBreakfast().subscribe((all:any)=>{
      console.log(all[0].calories);
      console.log("the length is", all.length)
      for(var i = 0; i < all.length; i++){
        this.calories += all[i].calories;
        this.protein += all[i].protein;
        this.carbs += all[i].carbs;
        this.fats += all[i].fat;

      }
    })
      this._http.allLunch().subscribe((all:any)=>{
        console.log(all[0].calories);
        console.log("the length is", all.length)
        for(var i = 0; i < all.length; i++){
          this.calories += all[i].calories;
          this.protein += all[i].protein;
          this.carbs += all[i].carbs;
          this.fats += all[i].fat;
  
        }
      })
        this._http.allDinner().subscribe((all: any)=>{
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
  setchart(){
    console.log(1);
    var protein = this.protein;
    var fats = this.fats;
    var carbs = this.carbs;
    this.chart = new Chart("pie", {
      type:'pie', //bar, pie, horizontal, line, doughnut, radar , polar
            data: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'NewBedFord'],
                datasets: [{
                    label: 'population',
                    data: [
                        4525324,
                        7654345,
                        4239752,
                        7234895,
                        3480324,
                        6523657,
                    ],
                     backgroundColor: 
                    [
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)',
                      'rgba(75, 192, 192, 0.6)',
                      'rgba(153, 102, 255, 0.6)',
                      'rgba(255, 159, 64, 0.6)',
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
