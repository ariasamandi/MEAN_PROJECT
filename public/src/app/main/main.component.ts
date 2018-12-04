import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute, Route } from '@angular/router';
import {Router} from '@angular/router'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(private _httpService: HttpService,private _http: HttpClient,private _route:ActivatedRoute, private _router: Router ){}
  title = 'To Your Workout Schedule';
  hasSchedule: any;
  schedule: any;
  user: any;
  logged: any;
  ngOnInit(){
    this._httpService.sessionUser().subscribe(hi=>{
      if(!hi){
        this._router.navigate([`/`])
      }
      else{
        this.logged = true;
      }
    })
    console.log(this.hasSchedule)

   
    this._httpService.sessionUser().subscribe(datal=> {
      console.log("me", datal);
      this.user = datal;
      console.log("schedule is: ",datal['schedule'][0])
      this.schedule = datal['schedule'][0];
      if(datal['schedule'][0]){
        this.hasSchedule = true;
      }
      else{
        this.hasSchedule = false;
      }
      })
  
    }

}
