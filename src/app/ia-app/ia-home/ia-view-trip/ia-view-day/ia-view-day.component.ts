import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IaAppStringconstantsService } from 'src/app/shared/services/ia-app-stringconstants.service';

@Component({
  selector: 'app-ia-view-day',
  templateUrl: './ia-view-day.component.html',
  styleUrls: ['./ia-view-day.component.scss']
})
export class IaViewDayComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stringConstants: IaAppStringconstantsService
  ) { }

  ngOnInit() {
    console.log(this.route);
  }

}
