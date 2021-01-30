import { Directive } from '@angular/core';
import { HostListener, Input } from '@angular/core';
import {IAlbum, Lightbox} from 'angular2-lightbox';


@Directive({
  selector: '[appLightboxDialog]'
})
export class LightboxDialogDirective {

  @Input('src') src: string;
  @Input('caption') caption: string;
  constructor(private _lightbox: Lightbox) {
  }

  @HostListener('click')
  openLightbox() {
    console.log('src: x' + this.caption + 'x')
    this._lightbox.open([ { src: this.src, caption: this.caption, thumb: this.src }], 0);
  }
}

