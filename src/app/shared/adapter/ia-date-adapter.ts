import { NativeDateAdapter, MatDateFormats } from '@angular/material';

export class IaDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {
    if (displayFormat !== 'input') {
      return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short'
      });
    } else {
      return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      });
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