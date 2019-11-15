import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IaFormBuilderService {

  createTripForm: FormGroup = this.formBuilder.group({});
  today: Date;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.createTripForm = this.formBuilder.group({
      sourceCity: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
      startDate: this.formBuilder.control({ value: new Date(Date.now()), disabled: true }, [Validators.required]),
      endDate: this.formBuilder.control({ value: '', disabled: true }),
      tripDays: this.formBuilder.control({ value: '', disabled: false })
    });

    this.today = new Date(Date.now());

  }


  clearInput(formControl: FormControl) {

    formControl.reset();

  }

}
