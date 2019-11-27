import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {
//   MatToolbarModule,
//   MatGridListModule,
//   MatRippleModule,
//   MatButtonModule,
//   MatCardModule,
//   MatIconModule,
//   MatSlideToggleModule,
//   MatInputModule,
//   MatDatepickerModule,
//   MatNativeDateModule,
//   MatDividerModule,
//   MatSidenavModule
// } from '@angular/material';

// import 'moment';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

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
// import { LayoutModule } from '@angular/cdk/layout';
import { IaViewDayComponent } from './ia-app/ia-home/ia-view-trip/ia-view-day/ia-view-day.component';
import { IaViewStayComponent } from './ia-app/ia-home/ia-view-trip/ia-view-day/ia-view-stay/ia-view-stay.component';
import { IaFabComponent } from './shared/components/ia-fab/ia-fab.component';
import { IaMaterialModule } from './ia-material/ia-material.module';

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
    IaViewStayComponent,
    IaFabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    IaMaterialModule,
    // MatToolbarModule,
    // MatGridListModule,
    // MatRippleModule,
    // MatButtonModule,
    // MatCardModule,
    // MatIconModule,
    // MatSlideToggleModule,
    // MatInputModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatDividerModule,
    // MatSidenavModule,
    // LayoutModule,
    // FontAwesomeModule
  ],
  providers: [
    IaThemeService,
    IaAppStateService,
    IaFormBuilderService,
    IaAppStringconstantsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    IaFabComponent
  ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(far, fas, fab);
  }
}
