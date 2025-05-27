import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { AllCarsComponent } from './core/pages/all-cars/all-cars.component';
import { CarDetailsComponent } from './core/pages/car-details/car-details.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { SignInComponent } from './core/pages/auth/sign-in/sign-in.component';
import { SignOutComponent } from './core/pages/auth/sign-out/sign-out.component';
import { HeroComponent } from './core/component/hero/hero.component';
import { PopularCarsComponent } from './core/component/popular-cars/popular-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCarsComponent,
    CarDetailsComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    SignInComponent,
    SignOutComponent,
    HeroComponent,
    PopularCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
