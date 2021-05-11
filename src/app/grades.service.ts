import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

import { Grade } from './grade'

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private gradesUrl = 'api/grades'
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(
    private http: HttpClient,
  ) { }
  

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.gradesUrl)
      .pipe(
        tap(_ => console.log('fetched grades')),
        catchError(this.handleError<Grade[]>('getGrades', []))
      );
  }
  
  updateGrade(grade: Grade): Observable<any> {
    return this.http.put(this.gradesUrl, grade, this.httpOptions).pipe(
      tap(_ => console.log('updated grade properties')),
      catchError(this.handleError<any>('updateGrade'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
