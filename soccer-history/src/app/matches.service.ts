import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';

const baseUrl = environment.BACKEND_URL || 'http://127.0.0.1:8000';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  constructor(private _http: HttpClient) {}

  matchesHistory() {
    return this._http
      .get(`${baseUrl}/matches_test`)
      .pipe(map((result) => result))
      .pipe(catchError(this.handleError<string>('Get matches history')));
  }

  matchesHistoryByCountry(country: string) {
    console.log(country);
    return this._http
      .get(`${baseUrl}/matches`)
      .pipe(map((result) => result))
      .pipe(catchError(this.handleError<string>('Get matches history')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return throwError(error);
    };
  }
}
