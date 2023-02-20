import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// import { IAlbum } from 'src/app/models/album.interface';
import { IFormPetMockData } from 'src/app/models/form.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit, OnDestroy {
  constructor(private ApiService: ApiService) {}

  public pets: Array<IFormPetMockData> = [];
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    // this.api.getPets().subscribe((data) => {
    //   this.pets = data;
    // });
    this.subscription.add(
      this.ApiService.getPets().subscribe((data) => {
        this.pets = data;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
