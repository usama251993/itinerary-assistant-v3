import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IaRouteAnimations } from '../shared/services/route-animations/ia-route-animations';

@Component({
  selector: 'app-ia-app',
  templateUrl: './ia-app.component.html',
  styleUrls: ['./ia-app.component.scss'],
  animations: IaRouteAnimations
})
export class IaAppComponent implements OnInit {

  constructor() { }

  ngOnInit() { }


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
