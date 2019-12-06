import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Route } from '@angular/router';
import { IaAppStateService } from '../state-management/ia-app-state.service';

@Injectable()
export class CanLoadGuard implements CanLoad {

  constructor(private stateService: IaAppStateService) { }

  canLoad(route: Route, urlSegments: UrlSegment[]): boolean {
    return this.stateService.isWanderer();
  }
}