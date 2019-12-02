import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IaAppStringconstantsService } from '../../shared/services/string-constants/ia-app-stringconstants.service';

@Component({
  selector: 'app-ia-home',
  templateUrl: './ia-home.component.html',
  styleUrls: ['./ia-home.component.scss']
})
export class IaHomeComponent implements OnInit {

  componentStrings: {} = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stringConstants: IaAppStringconstantsService,
  ) { }

  ngOnInit() {
    this.componentStrings = this.stringConstants.appStrings['home'];
  }

  createTrip() {
    // setTimeout(() => { this.router.navigate(['../' + 'create'], { relativeTo: this.route }); }, 500);
    this.router.navigate(['../' + 'create'], { relativeTo: this.route });
  }

  loadTrip() {
    // setTimeout(() => { this.router.navigate(['../' + 'load'], { relativeTo: this.route }); }, 500);
    this.router.navigate(['../' + 'load'], { relativeTo: this.route });
  }

}
