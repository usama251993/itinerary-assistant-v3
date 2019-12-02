import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IaAppComponent } from './ia-app/ia-app.component';
import { IaCreateTripComponent } from './ia-app/ia-home/ia-create-trip/ia-create-trip.component';
import { IaLoadTripComponent } from './ia-app/ia-home/ia-load-trip/ia-load-trip.component';
import { IaRouteErrorComponent } from './ia-route-error/ia-route-error.component';
import { IaHomeComponent } from './ia-app/ia-home/ia-home.component';
import { IaViewTripComponent } from './ia-app/ia-home/ia-view-trip/ia-view-trip.component';
import { IaViewDayComponent } from './ia-app/ia-home/ia-view-trip/ia-view-day/ia-view-day.component';
import { IaViewStayComponent } from './ia-app/ia-home/ia-view-trip/ia-view-day/ia-view-stay/ia-view-stay.component';


const routes: Routes = [
  // { path: 'home', component: IaAppComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '', component: IaAppComponent, children: [

      // Home
      { path: 'home', component: IaHomeComponent, data: { animation: 'homePage' } },
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      // Create
      { path: 'create', component: IaCreateTripComponent, data: { animation: 'createTripPage' } },

      // Load
      { path: 'load', component: IaLoadTripComponent, data: { animation: 'loadTripPage' } },

      // View Trip
      { path: 'view', component: IaViewTripComponent, data: { animation: 'viewTripPage' } },

      // View Day
      { path: 'view/day/:date', component: IaViewDayComponent },

      // View Stay
      { path: 'view/day/:date/stay/:stay', component: IaViewStayComponent }
    ]
  },

  // Error
  { path: 'not-found', component: IaRouteErrorComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
