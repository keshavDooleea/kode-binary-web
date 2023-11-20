import { Component, Input } from '@angular/core';
import { Params } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() isActive!: boolean;
  @Input() routerLinks!: string[];
  @Input() queryParams!: Params;
  @Input() i18nKey!: string;
}
