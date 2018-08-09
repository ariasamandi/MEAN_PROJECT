import { Component } from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService,private _http: HttpClient){}
  title = 'MEAN';
  ngOninit(){
    console.log('hiiii')
    // this._httpService.getApi().subscribe(data=>{
    //   console.log("hi");
  
}
  getData(){
    let bulbasaur = this._httpService.getPokemon();
    bulbasaur.subscribe(data => console.log("Got our tasks!", data));
    console.log("hi");
  //   let chicken = this._http.get("http://pokeapi.co/api/v2/pokemon/1").subscribe(data => {
  //     co
  //   })
  //   // this._httpService.getApi().subscribe(data=>{
  //   //   console.log(data);
  
  }
  
}

