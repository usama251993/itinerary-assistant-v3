import { NativeDateAdapter, MatDateFormats } from '@angular/material';

export class IaDateAdapter extends NativeDateAdapter {

  dateOptions: { year: string, month: string, day: string, weekday: string } = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };

  format(date: Date, displayFormat: Object): string {
    if (displayFormat !== 'input') {
      let day: string = date.getDate().toString();
      day = +day < 10 ? '0' + day : day;
      let month: string = (date.getMonth() + 1).toString();
      month = +month < 10 ? '0' + month : month;
      let year = date.getFullYear();
      return `${day}-${month}-${year}`;
    } else {
      return date.toLocaleDateString('en-IN', this.dateOptions);
    }
  }
}

export const IA_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'long' },
    dateA11yLabel: {
      year: 'numeric', month: 'long', day: 'numeric'
    },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};