import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { IaFormBuilderService } from '../../../shared/services/ia-form-builder.service';
import { IaAppStringconstantsService } from '../../../shared/services/ia-app-stringconstants.service';
import { IaAppStateService } from '../../../shared/services/ia-app-state.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { IaDateAdapter, IA_DATE_FORMATS } from 'src/app/shared/adapter/ia-date-adapter';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-ia-create-trip',
  templateUrl: './ia-create-trip.component.html',
  styleUrls: ['./ia-create-trip.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: IaDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: IA_DATE_FORMATS }
  ]
})

export class IaCreateTripComponent implements OnInit {

  componentStrings: {} = {};

  createTripForm: FormGroup;
  today: Date;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stringConstants: IaAppStringconstantsService,
    private tripFormBuilder: IaFormBuilderService,
    private stateService: IaAppStateService,
    private breakPoint: BreakpointObserver,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.componentStrings = this.stringConstants.appStrings['createTrip'];

    this.createTripForm = this.formBuilder.group({});
    this.createTripForm = this.tripFormBuilder.createTripForm;
    this.today = this.tripFormBuilder.today;

    this.resetEndDateParams();
    this.handleValueChanges();

  }

  resetEndDateParams() {
    this.createTripForm.get('endDate').setValue(this.getOffsetDate(this.createTripForm.get('startDate').value, 1), { emitEvent: false });
    this.createTripForm.get('tripDays').setValue(1, { emitEvent: false });
  }

  handleValueChanges() {
    this.createTripForm.get('startDate').valueChanges.subscribe((startDate: Date) => {
      this.createTripForm.get('endDate').setValue(this.getOffsetDate(this.createTripForm.get('startDate').value, this.createTripForm.get('tripDays').value), { emitEvent: false });
    });

    this.createTripForm.get('endDate').valueChanges.subscribe((endDate: Date) => {
      let startDate = this.createTripForm.get('startDate').value;
      this.createTripForm.get('tripDays').setValue(Math.ceil(Math.abs(
        endDate.getTime() - startDate.getTime()
      ) / (86400000)), { emitEvent: false });
    });

    this.createTripForm.get('tripDays').valueChanges.subscribe((tripDays: number) => {
      if (tripDays === null) tripDays = 1;
      let startDate = this.createTripForm.get('startDate').value;
      this.createTripForm.get('endDate').setValue(this.getOffsetDate(startDate, tripDays), { emitEvent: false });
      this.createTripForm.get('tripDays').setValue(tripDays, { emitEvent: false });
    });
  }

  getOffsetDate(startDate: Date, offsetDays: number): Date {
    let newEndDate = new Date(startDate);
    newEndDate.setDate(startDate.getDate() + offsetDays);
    return newEndDate;
  }

  get isMobile(): boolean {
    return this.breakPoint.isMatched('(max-width: 767px)');
  }

  createTrip() {
    this.stateService.createTripForm = this.createTripForm;
    this.router.navigate(['../' + 'view'], { relativeTo: this.route });
  }

  clearInput(formControl: FormControl) {
    this.tripFormBuilder.clearInput(formControl);
  }
}
