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
  logged: any;
  constructor(private _httpService: HttpService,  private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._httpService.sessionUser().subscribe(hi=>{
      if(!hi){
        this._router.navigate([`/`])
      }
      else{
        this.logged = true;
      }
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
        console.log("errors", data['errors'])
        for(var key in data['errors']){
            console.log(data['errors'][key]['message']);
            this.errors.push(data['errors'][key]['message']);
          }
      }
      else{
      console.log("no errors", data);
      this._router.navigate(['/dashboard'])
      }
    })
  }

}
