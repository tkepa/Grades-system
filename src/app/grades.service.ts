import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Grade } from './grade';
import { GRADES } from './mock-grades';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private gradesUrl = 'api/grades'

  constructor(
    private http: HttpClient,
  ) { }

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.gradesUrl)
      .pipe(
        tap(_=> this.log('fetched grades')),
        catchError(this.handleError<Grade[]>('getGrades', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
