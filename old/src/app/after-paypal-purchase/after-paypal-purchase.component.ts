import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SendMailService } from '../send-mail.service';
import {Observable} from 'rxjs/Observable';
import {SignBookForm } from './signbookform.interface';

@Component({
  selector: 'app-after-paypal-purchase',
  templateUrl: './after-paypal-purchase.component.html',
  styleUrls: ['./after-paypal-purchase.component.scss']
})
export class AfterPaypalPurchaseComponent implements OnInit {

  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public complete: boolean;
  public error: boolean;
  public sending: boolean;

  constructor(private _fb: FormBuilder, private sendMailService: SendMailService) { }

  ngOnInit() {
    this.complete = false;
    this.error = false;
    this.sending = false;

    this.myForm = new FormGroup({
      name: new FormControl('', [<any>Validators.required]),
      email: new FormControl('', [<any>Validators.required]),
      books: new FormControl('', [<any>Validators.required]),
      message: new FormControl('', [<any>Validators.required]),
    });
  }

  save(model: SignBookForm, isValid: boolean) {
    if (isValid) {

      this.sending = true;
      let op: Observable<Object>;

      this.submitted = true; // set form submit to true
      op = this.sendMailService.sendSignBookForm(model);

      // Subscribe to observable
      op.subscribe(
        () => {
          console.log('success');
          this.sending = false;
          this.complete = true;
        },
        err => {
          // Log errors if any
          this.sending = false;
          console.log(err);
          this.error = true;
          this.complete=false;
        });
    }
  }
}
