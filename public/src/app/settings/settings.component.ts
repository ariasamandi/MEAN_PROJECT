import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  schedule: any;
  erros = [];
  constructor(private _httpService: HttpService,  private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }

}
