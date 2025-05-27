import { Component } from '@angular/core';
import { Car } from '../../interfaces/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  constructor(private _CarsService:CarsService){}
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
