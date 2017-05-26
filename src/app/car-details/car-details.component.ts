import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Cars } from '../cars';
import { CarsOffersService } from '../cars-offers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: Cars;
  constructor(
    private carsService: CarsOffersService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(){
    this.route.params
      .switchMap(params => this.carsService.getCar(params['id']))
      .subscribe(car => this.car = car)
    }
  goBack(): void {
    this.location.back();
  }
}
