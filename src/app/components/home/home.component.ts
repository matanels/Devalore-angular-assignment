import { Component, OnInit } from '@angular/core';
import { IFormPetMockData } from 'src/app/models/form.interface';
import { IPets } from 'src/app/models/pets.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;

  pets: IPets[] = [
    { value: 'dog-0', viewValue: 'Dog' },
    { value: 'cat-1', viewValue: 'Cat' },
    { value: 'horse-2', viewValue: 'Horse' },
    { value: 'other-3', viewValue: 'Other' },
  ];

  constructor() {}
  ngOnInit(): void {}
}
