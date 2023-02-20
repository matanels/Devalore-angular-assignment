import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IFormPetMockData } from '../models/form.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private mockData: IFormPetMockData[] = [
    {
      Name: 'Thomas',
      Age: 2,
      Type: 'Dog',
      Color: 'Black',
    },
    {
      Name: 'Mike',
      Age: 1,
      Type: 'Cat',
      Color: 'Mixed',
    },
  ];

  private _petsSubject: BehaviorSubject<Array<IFormPetMockData>> =
    new BehaviorSubject(this.mockData);

  constructor() {}

  public getPets(): Observable<Array<IFormPetMockData>> {
    return this._petsSubject as Observable<Array<IFormPetMockData>>;
  }
}
