import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DateAdapter, MAT_DATE_FORMATS, MatSlideToggle } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';

import { IaFormBuilderService } from '../../../shared/services/forms/ia-form-builder.service';
import { IaAppStringconstantsService } from '../../../shared/services/string-constants/ia-app-stringconstants.service';
import { IaAppStateService } from '../../../shared/services/state-management/ia-app-state.service';
import { IaDateAdapter, IA_DATE_FORMATS } from '../../../shared/adapter/ia-date-adapter';
import { IaCreateTripAnimation } from './ia-create-trip.animation';


@Component({
  selector: 'app-ia-create-trip',
  templateUrl: './ia-create-trip.component.html',
  styleUrls: ['./ia-create-trip.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: IaDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: IA_DATE_FORMATS }
  ],
  animations: IaCreateTripAnimation
})

export class IaCreateTripComponent implements OnInit {

  @ViewChild('sourceCityInput', { static: true }) inputRef: ElementRef<HTMLInputElement>;

  componentStrings: {} = {};
  control: {} = {};

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

    this.control = {
      isWanderer: this.createTripForm.get('isWanderer'),
      startDate: this.createTripForm.get('startDate'),
      endDate: this.createTripForm.get('endDate'),
      tripStayNights: this.createTripForm.get('tripStayNights')
    };

    this.resetEndDateParams();
    this.handleValueChanges();

    this.inputRef.nativeElement.focus();

  }

  resetEndDateParams() {
    this.control['endDate'].setValue(this.control['startDate'].value, { emitEvent: false });
    this.control['tripStayNights'].setValue(0, { emitEvent: false });
  }

  handleValueChanges() {

    this.control['isWanderer'].valueChanges.subscribe((wanderer: boolean) => {
      if (wanderer) {
        this.control['endDate'].setValue(null);
        this.control['tripStayNights'].setValue(null);
      }
      else {
        this.control['endDate'].setValue(this.control['startDate'].value);
        this.control['tripStayNights'].setValue(Math.ceil(Math.abs(
          this.control['endDate'].value.getTime() - this.control['startDate'].value.getTime()
        ) / (86400000)), { emitEvent: false });
      }
    });

    this.control['startDate'].valueChanges.subscribe((startDate: Date) => {
      this.control['endDate'].setValue(this.getOffsetDate(this.control['startDate'].value, this.control['tripStayNights'].value), { emitEvent: false });
    });

    this.control['endDate'].valueChanges.subscribe((endDate: Date) => {
      if (endDate === null) endDate = new Date();
      let startDate = this.control['startDate'].value;
      this.control['tripStayNights'].setValue(Math.ceil(Math.abs(
        endDate.getTime() - startDate.getTime()
      ) / (86400000)), { emitEvent: false });
    });

    this.control['tripStayNights'].valueChanges.subscribe((tripStayNights: number) => {
      if (tripStayNights === null) tripStayNights = 0;
      let startDate = this.control['startDate'].value;
      this.control['endDate'].setValue(this.getOffsetDate(startDate, tripStayNights), { emitEvent: false });
      this.control['tripStayNights'].setValue(tripStayNights, { emitEvent: false });
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
