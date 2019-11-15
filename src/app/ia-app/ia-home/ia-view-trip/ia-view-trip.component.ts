import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'app-ia-view-trip',
  templateUrl: './ia-view-trip.component.html',
  styleUrls: ['./ia-view-trip.component.scss']
})
export class IaViewTripComponent implements OnInit {

  @ViewChild('viewCalendar', { static: false }) viewCalendar: MatCalendar<Date>;
  calendarDates: {} = {};

  constructor() { }

  ngOnInit() {
    this.calendarDates['startDate'] = new Date(Date.now());
    this.calendarDates['endDate'] = new Date(Date.now());
    this.calendarDates['tripDays'] = 9;
    this.calendarDates['endDate'].setDate(this.calendarDates['startDate'].getDate() + this.calendarDates['tripDays']);
  }

  dateChanged(eventData: any) {
    console.log(eventData);
    this.viewCalendar.selected = eventData;
  }

}
