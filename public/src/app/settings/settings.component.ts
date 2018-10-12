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
  constructor(private _httpService: HttpService,  private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      let p = params['id'];
      console.log(p)
      this._httpService.singleSchedule(p).subscribe(data=>{
      console.log(data);
      this.editing = data;
    })
  })
}
  editSchedule(editing){
    console.log(editing, "edited");
    this._httpService.es(editing).subscribe(data=>{
      console.log(data);
      this._router.navigate(['/'])
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
