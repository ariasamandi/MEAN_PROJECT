import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HttpService} from './../http.service';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {

  constructor(private _httpService: HttpService,private _http: HttpClient, private _router: Router) { }
  s: any={};
  showNav = true;
  errors=[];
  ngOnInit() {
    console.log(this.showNav);
    $( document ).ready(function() {
      console.log( "ready!" );
    this.showNav = true
    $(function() {
   
  $('#login-form-link').click(function(e) {
  $("#login-form").delay(100).fadeIn(100);
   $("#register-form").fadeOut(100);
  $('#register-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
  $("#register-form").delay(100).fadeIn(100);
   $("#login-form").fadeOut(100);
  $('#login-form-link').removeClass('active');
  $(this).addClass('active');
  e.preventDefault();
  });
  
  });
});
  }
  login(){
    this.errors = [];
    this._httpService.login(this.s).subscribe(data=>{
      console.log(data)
      if(data == "Username or Password is invalid"){
          console.log(data);
          this.errors.push(data);
          
        }
        else{
          console.log('hi')
      console.log("this is the data", data);
      this.s = data;
      this._router.navigate(['/dashboard'])
        }
      

    });
    
  }
  register(){
    console.log(this.s)
    this._httpService.register(this.s).subscribe(data=>{
      this.errors = [];
      if(data['errors']){
        for(var key in data['errors']){
          console.log(data['errors'][key]['message']);
          this.errors.push(data['errors'][key]['message']);
          
        }
      }
      else{
        console.log(data);
        this.s = data;
        this._router.navigate([`/dashboard`])
      }
    })
  }
  

}
