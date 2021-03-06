import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-add-scheule',
  templateUrl: './add-scheule.component.html',
  styleUrls: ['./add-scheule.component.css']
})
export class AddScheuleComponent implements OnInit {
  newSchedule: any;
  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.newSchedule = {Breakfast_time: "", Lunch_time: "", Dinner_time: ""}
  }
  addSchedule(){
    console.log(this.newSchedule, "i am here from ts");
    this._httpService.addSchedule(this.newSchedule).subscribe(data=>{
      console.log(data);
      this.newSchedule = {Breakfast_time: "", Lunch_time: "", Dinner_time: ""}
          this._router.navigate(['/dashboard'])
    })
  }
}
