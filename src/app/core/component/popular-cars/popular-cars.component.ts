import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/shared/interfaces/car';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-popular-cars',
  templateUrl: './popular-cars.component.html',
  styleUrls: ['./popular-cars.component.css']
})
export class PopularCarsComponent implements OnInit {
  constructor(private _carsService:CarsService){}
  name:string=''
  carsList:Car[]=[]
  ngOnInit(): void {
      this.getRecommendCar()
  }
  getRecommendCar(){
    this._carsService.getAllCars()
      .subscribe( {
        next:(res)=>{
          this.carsList=res.cars
            console.log(this.carsList)
        },
        error:(err)=>{
            console.log(err)
        },
        complete:()=>{
            console.log("you are done")
        },
      });
    
  }

}
