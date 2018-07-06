import { Component, OnInit } from '@angular/core';
import {IAlbum, Lightbox} from 'angular2-lightbox';

@Component({
  selector: 'app-about-treasure',
  templateUrl: './about-treasure.component.html',
  styleUrls: ['./about-treasure.component.scss']
})
export class AboutTreasureComponent implements OnInit {

  constructor(private _lightbox: Lightbox) { }

  ngOnInit() {
  }

  open() {
    this._lightbox.open([ { src: "assets/img/Treasure2.jpg", caption: 'treasure', thumb: "assets/img/Treasure2.jpg" }], 0);
  }

}
