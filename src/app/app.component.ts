import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable } from 'rxjs';
import { IaThemeService } from './shared/services/theming/ia-theme.service';
import { IaAppStringconstantsService } from './shared/services/string-constants/ia-app-stringconstants.service';
import { IaRouteAnimations } from './shared/services/route-animations/ia-route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: IaRouteAnimations
})
export class AppComponent {
  title = 'ia-v2';

  appStrings: {} = {};

  // For theme toggle
  isDarkTheme: Observable<boolean> = new Observable<boolean>();

  constructor(
    private themeService: IaThemeService,
    private stringConstants: IaAppStringconstantsService
  ) { }

  ngOnInit() {

    this.appStrings = this.stringConstants.appStrings;

    // For theme toggle
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
