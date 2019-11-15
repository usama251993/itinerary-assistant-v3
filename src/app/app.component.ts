import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IaThemeService } from './shared/services/ia-theme.service';
import { IaAppStringconstantsService } from './shared/services/ia-app-stringconstants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
