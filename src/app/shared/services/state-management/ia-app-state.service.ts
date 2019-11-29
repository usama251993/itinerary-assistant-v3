import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface DateOption {
  year: string,
  month: string,
  day: string,
  weekday: string
}

@Injectable({
  providedIn: 'root'
})

export class IaAppStateService {

  createTripForm: FormGroup = this.formBuilder.group({});

  localeDateOptions: DateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };

  fabToggleState: boolean = false;

  constructor(private formBuilder: FormBuilder) {

  }
}
