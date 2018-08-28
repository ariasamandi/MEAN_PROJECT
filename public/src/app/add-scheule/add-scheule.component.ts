import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
@Component({
  selector: 'app-add-scheule',
  templateUrl: './add-scheule.component.html',
  styleUrls: ['./add-scheule.component.css']
})
export class AddScheuleComponent implements OnInit {
  newSchedule: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newSchedule = {breakfast: "", lunch: "", dinner: ""}
  }
  addSchedule(){
    this._httpService.addSchedule(this.newSchedule).subscribe(data=>{
      console.log(data);
    })
  }
}
