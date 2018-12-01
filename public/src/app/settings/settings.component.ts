import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  erros = [];
  editing: any;
  schedule: any;
  errors = [];
  constructor(private _httpService: HttpService,  private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._httpService.sessionUser().subscribe(d=>{
      console.log("session user: ", d);
    })
      this._httpService.sessionUser().subscribe(data=>{
      console.log("single schedule data: ", data['schedule'][0]['Breakfast_time']);
      this.schedule = data['schedule'][0];
      console.log(this.schedule);
    })
}
  editSchedule(schedule){
    console.log(schedule, "edited");
    this._httpService.es(schedule).subscribe(data=>{
      this.errors = [];
      if(data['errors']){
        console.log(data['errors'])
        for(var key in data['errors']){
          if(key == 'Breakfast_time' || key == 'Lunch_time' || key == 'Dinner_time'){
            console.log(data['errors'][key]['message']);
            this.errors.push(data['errors'][key]['message']);
          }
          
        }
      }
      else{
      console.log(data);
      this._router.navigate(['/dashboard'])
      }
    })
  }
  getSchedule(schedule){
    this._httpService.singleSchedule(schedule._id).subscribe(single=>{
      console.log("this is da single", single);
      this.schedule = single;
      console.log("todays my birthdsy", this.schedule)
    })
  }

}
