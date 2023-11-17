import { Component } from '@angular/core';
import { APP_TITLE } from 'src/utils/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  appTitle: string = APP_TITLE;
}
