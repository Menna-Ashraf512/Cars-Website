import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { AllCarsComponent } from './core/pages/all-cars/all-cars.component';
import { CarDetailsComponent } from './core/pages/car-details/car-details.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:"full"},
  {path:'home',component:HomeComponent, title:"home page"},
  {path:'allCars',component:AllCarsComponent, title:"Cars page"},
  {path:'carDetails/:id',component:CarDetailsComponent, title:"CarDetails page"},
  {path:'**',component:NotFoundComponent, title:"404 page"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
