import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getApi()
    this.getPokemon();
   }
  //  getApi(){
  //    return this._http.get("http://pokeapi.co/api/v2/pokemon/1");
  //  }
  getPokemon() {
    console.log("weird");
    
    return this._http.get('http://platform.fatsecret.com/js/?key=14679b4a576345ca8e99efcf53ffaa91');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
  }
}
