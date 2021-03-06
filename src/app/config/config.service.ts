import { Injectable } from '@angular/core';
import { Config } from './config';
import { HttpResponse, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Injectable({ 
	providedIn: 'root'
})

export class ConfigService{
	configUrl = 'assets/config.json';

	constructor(private http: HttpClient){ }

	//get configuration urls
	getConfig() {
	  return this.http.get<Config>(this.configUrl).pipe(
	  	retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) //then handle the error
    );
	}

	//Get response to check
	getConfigResponse(): Observable<HttpResponse<Config>> {
	  return this.http.get<Config>(
	    this.configUrl, { observe: 'response' });
	}

	//handle errors
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
	  // return an observable with a user-facing error message
	  return throwError(
	    'Something bad happened; please try again later.');
	};

}