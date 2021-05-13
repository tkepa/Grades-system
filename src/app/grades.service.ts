import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import {
  catchError,
  debounce,
  debounceTime,
  distinct,
  distinctUntilChanged,
  map,
  tap
} from 'rxjs/operators';

import { Grade } from './grade';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private gradesUrl = 'api/grades';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {}

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.gradesUrl).pipe(
      tap((_) => console.log('fetched grades')),
      catchError(this.handleError<Grade[]>('getGrades', []))
    );
  }

  updateGrade(grade: Grade): Observable<any> {
    return this.http.put(this.gradesUrl, grade, this.httpOptions).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap((_) => console.log('updated grade properties')),
      catchError(this.handleError<any>('updateGrade'))
    );
  }

  addGrade(grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(this.gradesUrl, grade, this.httpOptions).pipe(
      tap((newGrade: Grade) => console.log(`added grade w/ id ${newGrade.id}`)),
      catchError(this.handleError<Grade>('addGrade'))
    );
  }

  deleteGrade(id: string): Observable<Grade> {
    const url = `${this.gradesUrl}/${id}`;

    return this.http.delete<Grade>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted grade id=${id}`)),
      catchError(this.handleError<Grade>('deleteHero'))
    );
  }

  getGrade(id: string): Observable<Grade> {
    const url = `${this.gradesUrl}/${id}`;

    return this.http.get<Grade>(url).pipe(
      tap((_) => console.log(`fetched grade id=${id}`)),
      catchError(this.handleError<Grade>(`getGrade id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): T {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
