import { Injectable } from '@angular/core';
import { ContactForm } from './contact/contactform.interface';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class SendMailService {

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

  constructor(private http: HttpClient) { }

  sendContactForm(form: ContactForm ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    const url  = 'https://lauriehansonbooksfns.azurewebsites.net/api/HttpTriggerJS1?code=kay7zrp0wij8EYxrRqwaYbOanq8414hlhqz6Lo0VONBaAQvHacTv0A=='

    console.log('Calling email service', form)
    this.http.post<ContactForm>(url, form, httpOptions);
  }
}
