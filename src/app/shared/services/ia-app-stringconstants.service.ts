import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IaAppStringconstantsService {

  appStrings: {} = {};

  constructor() {

    // ia-header
    this.appStrings['header'] = {};
    this.appStrings['header']['toolbar'] = {};
    this.appStrings['header']['toolbar']['heading'] = 'Itinerary Assistant';
    this.appStrings['header']['toolbar']['headingV2'] = 'Itinerary Assistant v2';
    this.appStrings['header']['toolbar']['themeToggleSwitch'] = 'Dark Theme';

    // ia-home
    this.appStrings['home'] = {};
    this.appStrings['home']['buttonHolder'] = {}
    this.appStrings['home']['buttonHolder']['createTrip'] = 'Create Trip';
    this.appStrings['home']['buttonHolder']['loadTrip'] = 'Load Trip';

    // ia-create-trip
    this.appStrings['createTrip'] = {};
    this.appStrings['createTrip']['cardTitle'] = 'New Trip';
    this.appStrings['createTrip']['mandatoryFieldString'] = 'Fields marked with (*) are mandatory';
    this.appStrings['createTrip']['formField'] = {};
    this.appStrings['createTrip']['formField']['mandatoryIndicator'] = '*';
    this.appStrings['createTrip']['formField']['sourceCity'] = 'Source City';
    this.appStrings['createTrip']['formField']['sourceCityError'] = 'Source City is required';
    this.appStrings['createTrip']['formField']['startDate'] = 'Start Date';
    this.appStrings['createTrip']['formField']['startDateError'] = 'Trip Start Date is required';
    this.appStrings['createTrip']['formField']['endDate'] = 'End Date';
    this.appStrings['createTrip']['formField']['invalidDateError'] = 'Enter the date in "MM/DD/YYYY"';
    this.appStrings['createTrip']['formField']['tripDays'] = 'Trip Days';
    this.appStrings['createTrip']['formButton'] = {};
    this.appStrings['createTrip']['formButton']['createTrip'] = 'Create Trip';

    // ia-view-trip
    this.appStrings['viewTrip'] = {};
    this.appStrings['viewTrip']['button'] = {};
    this.appStrings['viewTrip']['button']['editDay'] = 'Edit Day Details';

    // ia-route-error
    this.appStrings['routeError'] = {};
    this.appStrings['routeError']['cardTitle'] = 'Error in Navigation!';
    this.appStrings['routeError']['cardContent'] = [];
    this.appStrings['routeError']['cardContent'] = ['We did not find anything here',
      'You might have entered a wrong URL in the address bar',
      'Go to the Home Page using the below button'];
    this.appStrings['routeError']['cardAction'] = 'Home';

  }
}
