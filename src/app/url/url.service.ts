import { Injectable } from '@angular/core';
import { Url } from './url';
import { HttpResponse, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({ 
	providedIn: 'root'
})

export class UrlService{
	UrlEndpoint = 'http://localhost:3000/shortened_urls/';

	constructor(private http: HttpClient){ }

	/** POST: add a new url to the database */
	addUrl (url: Url): Observable<Url> {
	  return this.http.post<Url>(this.UrlEndpoint, url, httpOptions)
	    .pipe(
	      catchError(this.handleError)
	    );
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