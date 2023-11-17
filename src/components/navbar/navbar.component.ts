import { Component, OnDestroy } from '@angular/core';
import { Router } from 'src/classes/router/router';
import { APP_TITLE } from 'src/utils/constants';
import { binToNbQueryParameters } from 'src/utils/query-params';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent extends Router implements OnDestroy {
  appTitle: string = APP_TITLE;
  binToNbQueryParam = binToNbQueryParameters.value;

  ngOnDestroy(): void {
    this.routerDestroy();
  }
}
