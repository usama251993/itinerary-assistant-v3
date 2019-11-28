import { Component, OnInit } from '@angular/core';
import { IaFabService, fabToggle } from '../../services/component-specific/ia-fab.service';
import { IaFabAnimation } from './ia-fab.animation';

@Component({
  selector: 'app-ia-fab',
  templateUrl: './ia-fab.component.html',
  styleUrls: ['./ia-fab.component.scss'],
  animations: IaFabAnimation
})
export class IaFabComponent implements OnInit {

  fabToggle = {} as fabToggle;

  constructor(private fabService: IaFabService) { }

  ngOnInit() {
    this.fabToggle = this.fabService.fabToggle;
    this.fabToggle.fabButtons = [];
  }

  showButtons() {
    this.fabToggle.fabToggleState.booleanValue = !this.fabToggle.fabToggleState.booleanValue;
    this.fabToggle.fabToggleState.stateString = this.fabToggle.fabStrings['active'];
    this.fabToggle.fabButtons = this.fabService.buttonGroup['defaultButtons'];
  }

  hideButtons() {
    this.fabToggle.fabToggleState.booleanValue = !this.fabToggle.fabToggleState.booleanValue;
    this.fabToggle.fabToggleState.stateString = this.fabToggle.fabStrings['inactive'];
    this.fabToggle.fabButtons = [];
  }

  toggleFab() {
    this.fabToggle.fabButtons.length ? this.hideButtons() : this.showButtons();
  }

}
