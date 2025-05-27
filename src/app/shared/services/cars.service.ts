import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private _HttpClient:HttpClient) { }
    getAllCars():Observable<any>{
    return this._HttpClient.get('https://myfakeapi.com/api/cars/')
  }
  getPostCarId(id:number):Observable<any>{
    return this._HttpClient.get(`https://myfakeapi.com/api/cars/${id}`)
  }
  searchByName(name:string):Observable<any>{
    return this._HttpClient.get(`https://myfakeapi.com/api/cars/name/${name}`)
  }
}
