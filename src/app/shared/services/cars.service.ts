import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  base_url=`https://myfakeapi.com/api/cars/`
  constructor(private _HttpClient:HttpClient) { }
    getAllCars():Observable<any>{
    return this._HttpClient.get(`${this.base_url}`)
  }
  getPostCarId(id:number):Observable<any>{
    return this._HttpClient.get(`${this.base_url}${id}`)
  }
  searchByName(name:string):Observable<any>{
    return this._HttpClient.get(`${this.base_url}name/${name}`)
  }
}
