import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ia-fab',
  templateUrl: './ia-fab.component.html',
  styleUrls: ['./ia-fab.component.scss']
})
export class IaFabComponent implements OnInit {

  fabButtons: { buttonText: string, buttonAction: string }[] = [];
  buttonGroup: { buttonText: string, buttonAction: string }[] = [
    { buttonText: 'heart', buttonAction: '' },
    { buttonText: 'plus', buttonAction: '' },
    { buttonText: 'fan', buttonAction: '' }
  ];
  toggleState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showButtons() {
    this.toggleState = !this.toggleState;
    this.fabButtons = this.buttonGroup;
  }

  hideButtons() {
    this.toggleState = !this.toggleState;
    this.fabButtons = [];
  }

  toggleFab() {
    this.fabButtons.length ? this.hideButtons() : this.showButtons();
  }

}
