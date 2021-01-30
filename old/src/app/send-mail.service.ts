import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { ContactForm } from './contact/contactform.interface';
import { SignBookForm } from './after-paypal-purchase/signbookform.interface';

@Injectable()
export class SendMailService {

  contactFormUrl = 'https://lauriehansonbooksfns.azurewebsites.net/api/HttpTriggerJS1?code=kay7zrp0wij8EYxrRqwaYbOanq8414hlhqz6Lo0VONBaAQvHacTv0A==';
  sendSignBookUrl = 'https://lauriehansonbooksfns.azurewebsites.net/api/SendBookSignForm?code=lLPerYxyDzTqKCxmcJuw5EQAILtReIVAAGY3TGRfiP1I9h1iYXCxag==';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
  }

  constructor(private http: HttpClient) {
  }

  extractData(res: Response) : Object {
    return { success: true };
  }

  handleErrorObservable(error: Response | any) {
    console.error('Error', error.message || error);
    return Observable.throw(error.message || error);
  }

  sendContactForm(form: ContactForm) {
    let headers: HttpHeaders;
    headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );
    console.log('Calling email service', form);
    return this.http.post(this.contactFormUrl, form, { headers: headers })
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }
  sendSignBookForm(form: SignBookForm) {
    let headers: HttpHeaders;
    headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );
    console.log('Calling email service', form);
    return this.http.post(this.sendSignBookUrl, form, { headers: headers })
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

}