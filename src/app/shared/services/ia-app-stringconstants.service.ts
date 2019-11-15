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

    // ia-app
    this.appStrings['app'] = {};
    this.appStrings['app']['buttonHolder'] = {}
    this.appStrings['app']['buttonHolder']['createTrip'] = 'Create Trip';
    this.appStrings['app']['buttonHolder']['loadTrip'] = 'Load Trip';

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
