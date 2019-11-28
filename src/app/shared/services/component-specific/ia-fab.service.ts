import { Injectable } from '@angular/core';
import { IaAppStringconstantsService } from '../string-constants/ia-app-stringconstants.service';

export interface fabToggle {
  fabButtons: {
    buttonText: string,
    buttonActions: string
  }[],
  fabToggleState: {
    booleanValue: boolean,
    stateString: string
  },
  fabStrings: {}
}

@Injectable({
  providedIn: 'root'
})
export class IaFabService {

  fabToggle = {} as fabToggle;

  buttonGroup = {};

  constructor(private stringConstants: IaAppStringconstantsService) {

    this.buttonGroup['defaultButtons'] = [
      { buttonText: 'paint-roller', buttonActions: 'toggleTheme()' },
      { buttonText: 'paint-roller', buttonActions: 'toggleTheme()' },
      { buttonText: 'paint-roller', buttonActions: 'toggleTheme()' },
      { buttonText: 'paint-roller', buttonActions: 'toggleTheme()' },
      { buttonText: 'paint-roller', buttonActions: 'toggleTheme()' }
    ];

    this.buttonGroup['createButtons'] = [

    ]

    this.fabToggle.fabButtons = this.buttonGroup['defaultButtons'];
    this.fabToggle.fabToggleState = { booleanValue: false, stateString: '' };
    this.fabToggle.fabStrings = this.stringConstants.appStrings['fabStrings'];
    this.fabToggle.fabToggleState.booleanValue = false;

  }
}
