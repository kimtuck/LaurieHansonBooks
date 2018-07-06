import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface LightboxBodyProperties {
  name: string;
}

@Component({
  selector: 'app-lightbox-body',
  templateUrl: './lightbox-body.component.html',
  styleUrls: ['./lightbox-body.component.scss']
})
export class LightboxBodyComponent implements OnInit {
  constructor(public thisDialogRef: MatDialogRef<LightboxBodyComponent>, @Inject(MAT_DIALOG_DATA) public data: LightboxBodyProperties) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
