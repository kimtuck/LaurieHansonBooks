import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LightboxBodyComponent } from './lightbox-body/lightbox-body.component'


@Directive({
  selector: '[appLightboxDialog]'
})
export class LightboxDialogDirective {
  constructor(public dialog: MatDialog) {}

  @HostListener('click', ['$event'])
  openLightBox() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { name: 'someName'};
    let dialogRef = this.dialog.open(LightboxBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog closed: ${result}`);
      //this.dialogResult = result;
    });
  }
}
