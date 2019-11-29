import { Injectable } from '@angular/core';
import { IaAppStringconstantsService } from '../string-constants/ia-app-stringconstants.service';
import { IaAppStateService } from '../state-management/ia-app-state.service';

export interface fabToggle {
  fabItems: {
    itemType: string,
    itemIcon?: string,
    itemText?: string,
    itemActions?: string
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

  itemGroup = {};

  constructor(private stringConstants: IaAppStringconstantsService,
    private stateService: IaAppStateService) {

    this.itemGroup['defaultButtons'] = [
      {
        itemType: 'slideToggle',
        itemText: 'Dark Theme',
        itemActions: 'toggleTheme'
      },
      {
        itemType: 'iconButton',
        itemText: 'Home',
        itemIcon: 'home',
        itemActions: ''
      },
      {
        itemType: 'iconButton',
        itemText: 'Help',
        itemIcon: 'question',
        itemActions: ''
      }
    ];

    this.itemGroup['createButtons'] = [

    ]

    this.fabToggle.fabItems = this.itemGroup['defaultButtons'];
    this.fabToggle.fabToggleState = { booleanValue: this.stateService.fabToggleState, stateString: '' };
    this.fabToggle.fabStrings = this.stringConstants.appStrings['fabStrings'];
    this.fabToggle.fabToggleState.booleanValue = false;

  }
}
