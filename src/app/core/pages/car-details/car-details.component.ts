import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/shared/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent  implements OnInit{

  carId:number=0
  constructor(private _carsService:CarsService, private _activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
      this.carId=this._activatedRoute.snapshot.params['id']
      if(this.carId){
        this.getCarById(this.carId)
      }
  }

  getCarById(id:number){
    this._carsService.getPostCarId(id).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      },
      complete() {
          console.log("you are complete");
      },
    })
  }
}
