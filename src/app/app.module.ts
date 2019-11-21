import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatGridListModule,
  MatRippleModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSlideToggleModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatSidenavModule
} from '@angular/material';

import 'moment';

import { IaAppComponent } from './ia-app/ia-app.component';
import { IaHomeComponent } from './ia-app/ia-home/ia-home.component';
import { IaHeaderComponent } from './ia-app/ia-header/ia-header.component';
import { IaCreateTripComponent } from './ia-app/ia-home/ia-create-trip/ia-create-trip.component';
import { IaLoadTripComponent } from './ia-app/ia-home/ia-load-trip/ia-load-trip.component';
import { IaViewTripComponent } from './ia-app/ia-home/ia-view-trip/ia-view-trip.component';
import { IaRouteErrorComponent } from './ia-route-error/ia-route-error.component';

import { IaThemeService } from './shared/services/ia-theme.service';
import { ReactiveFormsModule } from '@angular/forms';
import { IaFormBuilderService } from './shared/services/ia-form-builder.service';
import { IaAppStateService } from './shared/services/ia-app-state.service';
import { IaAppStringconstantsService } from './shared/services/ia-app-stringconstants.service';
import { LayoutModule } from '@angular/cdk/layout';
import { IaViewDayComponent } from './ia-app/ia-home/ia-view-trip/ia-view-day/ia-view-day.component';
import { IaViewStayComponent } from './ia-app/ia-home/ia-view-trip/ia-view-day/ia-view-stay/ia-view-stay.component';

@NgModule({
  declarations: [
    AppComponent,
    IaHomeComponent,
    IaHeaderComponent,
    IaAppComponent,
    IaCreateTripComponent,
    IaLoadTripComponent,
    IaViewTripComponent,
    IaRouteErrorComponent,
    IaViewDayComponent,
    IaViewStayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatSidenavModule,
    LayoutModule
  ],
  providers: [
    IaThemeService,
    IaAppStateService,
    IaFormBuilderService,
    IaAppStringconstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
