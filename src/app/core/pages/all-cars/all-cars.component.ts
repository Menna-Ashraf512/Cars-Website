import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/interfaces/car';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  constructor(private _CarsService:CarsService){}
  page: number = 1;
  allCarsList:Car[]=[]
  ngOnInit(): void {
    this.getAllCars()
  }
  getAllCars(){
    this._CarsService.getAllCars().subscribe({
      next:(res)=>{
        this.allCarsList=res.cars
        console.log(res.cars)
      },
      error:(err)=>{
        console.log(err)
      },
      complete() {
          console.log("you are complete")
      },
    })
  }

}
