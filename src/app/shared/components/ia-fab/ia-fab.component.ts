import { Component, OnInit } from '@angular/core';
import { IaFabService, fabToggle } from '../../services/component-specific/ia-fab.service';
import { IaFabAnimation } from './ia-fab.animation';
import { IaAppStateService } from '../../services/state-management/ia-app-state.service';

@Component({
  selector: 'app-ia-fab',
  templateUrl: './ia-fab.component.html',
  styleUrls: ['./ia-fab.component.scss'],
  animations: IaFabAnimation
})
export class IaFabComponent implements OnInit {

  fabToggle = {} as fabToggle;

  constructor(private fabService: IaFabService,
    private stateService: IaAppStateService) { }

  ngOnInit() {
    this.fabToggle = this.fabService.fabToggle;
    this.fabToggle.fabItems = [];
  }

  showButtons() {
    this.fabToggle.fabToggleState.booleanValue = !this.fabToggle.fabToggleState.booleanValue;
    this.stateService.fabToggleState = this.fabToggle.fabToggleState.booleanValue;
    this.fabToggle.fabToggleState.stateString = this.fabToggle.fabStrings['active'];
    this.fabToggle.fabItems = this.fabService.itemGroup['defaultButtons'];
  }

  hideButtons() {
    this.fabToggle.fabToggleState.booleanValue = !this.fabToggle.fabToggleState.booleanValue;
    this.stateService.fabToggleState = this.fabToggle.fabToggleState.booleanValue;
    this.fabToggle.fabToggleState.stateString = this.fabToggle.fabStrings['inactive'];
    this.fabToggle.fabItems = [];
  }

  toggleFab() {
    this.fabToggle.fabItems.length ? this.hideButtons() : this.showButtons();
  }

}
