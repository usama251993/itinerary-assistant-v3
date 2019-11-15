import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IaAppStateService {

  createTripForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {

  }
}
