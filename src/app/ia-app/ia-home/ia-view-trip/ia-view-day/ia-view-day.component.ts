import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IaAppStringconstantsService } from 'src/app/shared/services/ia-app-stringconstants.service';
import { DateOption, IaAppStateService } from 'src/app/shared/services/ia-app-state.service';

@Component({
  selector: 'app-ia-view-day',
  templateUrl: './ia-view-day.component.html',
  styleUrls: ['./ia-view-day.component.scss']
})
export class IaViewDayComponent implements OnInit {

  selectedDay: Date = new Date(Date.now());
  localeDateOptions: DateOption;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stateService: IaAppStateService,
    private stringConstants: IaAppStringconstantsService
  ) { }

  ngOnInit() {
    console.log(this.route.data);
    this.localeDateOptions = this.stateService.localeDateOptions;
    console.log(this.route);
  }

}
