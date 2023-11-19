import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-watermark-item',
  templateUrl: './watermark-item.component.html',
  styleUrls: ['./watermark-item.component.scss'],
})
export class WatermarkItemComponent {
  @Input() text!: string;
  @Input() linkURL!: string;
  @Input() linkText!: string;
  @Input() imgSrc!: string;
  @Input() imgAlt!: string;
}
