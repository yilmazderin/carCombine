import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/shared/models/Car';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  cars:Car[] = [];

  constructor(private carService:CarService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.cars = this.carService.getAllCarsBySearchTerm(params.searchTerm)
      else
        this.cars = this.carService.getAll();
    })
  }

}
