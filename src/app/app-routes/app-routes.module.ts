import { NgModule } from '@angular/core';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { InfoComponent } from '../info/info.component';
import { CarOffersComponent } from '../car-offers/car-offers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/info', pathMatch: 'full' },
  { path: 'info',  component: InfoComponent },
  { path: 'detail/:id', component: CarDetailsComponent },
  { path: 'car-offers',     component: CarOffersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutesModule { }
