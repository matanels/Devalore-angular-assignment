import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './components/pets/pets.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
