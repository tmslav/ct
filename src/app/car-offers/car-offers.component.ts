import { Component, OnInit } from '@angular/core';
import { CarsOffersService } from '../cars-offers.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-car-offers',
  templateUrl: './car-offers.component.html',
  styleUrls: ['./car-offers.component.css']
})
export class CarOffersComponent implements OnInit {
  cars: Cars[];
  constructor(private carsService: CarsOffersService) { }

  ngOnInit() {
    this.carsService.getCars().subscribe(
      cars => this.cars = cars
    );
  }

}
