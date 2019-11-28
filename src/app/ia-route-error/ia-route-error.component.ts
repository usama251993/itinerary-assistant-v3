import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IaAppStringconstantsService } from '../shared/services/string-constants/ia-app-stringconstants.service';

@Component({
  selector: 'app-ia-route-error',
  templateUrl: './ia-route-error.component.html',
  styleUrls: ['./ia-route-error.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IaRouteErrorComponent implements OnInit {

  componentStrings: {} = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stringContants: IaAppStringconstantsService
  ) { }

  ngOnInit() {
    this.componentStrings = this.stringContants.appStrings['routeError'];
  }

  goHome() {
    // console.log(window.location);
    // this.router.navigate([''], { relativeTo: this.route });
    // this.router.navigate(['/home'], { relativeTo: this.route });
    window.location.assign(window.location.origin);
  }

}
