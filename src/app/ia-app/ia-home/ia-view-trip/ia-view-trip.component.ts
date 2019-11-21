import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IaAppStringconstantsService } from 'src/app/shared/services/ia-app-stringconstants.service';
import { IaAppStateService, DateOption } from 'src/app/shared/services/ia-app-state.service';

@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss']
})
export class IaViewTripComponent implements OnInit {

  componentStrings: {} = {};

  calendarDates: {} = {};
  localeDateOptions: DateOption = this.stateService.localeDateOptions;

  selectedDay: Date = new Date(Date.now());

  dateClass: Function = (date: Date) => { };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stringConstants: IaAppStringconstantsService,
    private stateService: IaAppStateService
  ) { }

  ngOnInit() {

    this.componentStrings = this.stringConstants.appStrings['viewTrip'];

    this.calendarDates = {};
    this.calendarDates['startDate'] = this.stateService.createTripForm.getRawValue()['startDate'];
    this.calendarDates['endDate'] = this.stateService.createTripForm.getRawValue()['endDate'];


    if (this.calendarDates['startDate'] === undefined || this.calendarDates['endDate'] === undefined) {
      this.router.navigate(['../' + 'create'], { relativeTo: this.route });
    } else {
      this.selectedDay = this.calendarDates['startDate'];
      this.dateClass = (date: Date) => {

        return (
          (date.toDateString() === this.calendarDates['startDate'].toDateString()) || (date.toDateString() === this.calendarDates['endDate'].toDateString())
        ) ? 'boundary-date' : 'non-boundary-date';

        // let calendarLocalString = date.toLocaleDateString('en-IN', {
        //   year: 'numeric',
        //   month: 'numeric',
        //   day: 'numeric'
        // });
        // let startDateLocalString = this.calendarDates['startDate'].toLocaleDateString('en-IN', {
        //   year: 'numeric',
        //   month: 'numeric',
        //   day: 'numeric'
        // });
        // let endDateLocalString = this.calendarDates['endDate'].toLocaleDateString('en-IN', {
        //   year: 'numeric',
        //   month: 'numeric',
        //   day: 'numeric'
        // });

        // return (calendarLocalString === startDateLocalString || calendarLocalString === endDateLocalString) ? 'boundary-date' : '';
      }
    }

  }

  dateChanged(dateClicked: Date) {
    this.selectedDay = dateClicked;
    let selectedDateString: string = this.selectedDay.getFullYear().toString() + '-' + ('00' + (this.selectedDay.getMonth() + 1).toString()).slice(-2) + '-' + ('00' + this.selectedDay.getDate().toString()).slice(-2);
    // this.router.navigate(['./day/' + selectedDateString], { relativeTo: this.route });
  }

  editDay(selectedDate: Date) {
    console.log(selectedDate)

  }

}
