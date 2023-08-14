import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  cars:Car[] = [];

  constructor(private carService:CarService) {
    this.cars = carService.getAll();
  }

}
