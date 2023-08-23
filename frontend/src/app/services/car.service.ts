import { Injectable } from '@angular/core';
import { Car } from '../shared/models/Car';
import { sample_cars } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getAll():Car[]{
    return sample_cars
  }

  getAllCarsBySearchTerm(searchTerm: string){
    return this.getAll().filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getCarById(carId:string):Car{
    return this.getAll().find(car => car.id == carId) ?? new Car();
  }
}
