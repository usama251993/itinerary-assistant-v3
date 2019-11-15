import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IaThemeService } from '../../shared/services/ia-theme.service';
import { IaAppStringconstantsService } from '../../shared/services/ia-app-stringconstants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ia-header',
  templateUrl: './ia-header.component.html',
  styleUrls: ['./ia-header.component.scss']
})
export class IaHeaderComponent implements OnInit {

  componentStrings: {} = {};

  // For theme toggle
  isDarkTheme: Observable<boolean> = new Observable<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private themeService: IaThemeService,
    private stringContants: IaAppStringconstantsService
  ) { }

  ngOnInit() {

    this.componentStrings = this.stringContants.appStrings['header'];

    // For theme toggle
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  // For theme toggle
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  goHome() {
    this.router.navigate([''], { relativeTo: this.route });
  }

}
