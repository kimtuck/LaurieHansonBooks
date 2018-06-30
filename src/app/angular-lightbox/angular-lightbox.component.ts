import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-lightbox',
  templateUrl: './angular-lightbox.component.html',
  styleUrls: ['./angular-lightbox.component.scss'],
})
export class AngularLightboxComponent implements OnInit {
  @Input('src') src : string;

  constructor() {
  }

  ngOnInit() {
  }
}
