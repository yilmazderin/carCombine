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
}
