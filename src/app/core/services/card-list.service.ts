import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Card} from '../interfaces/card'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardListService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  getCardList(type: string): Observable<Card[]> {
    return this.http.get<Card[]>(`http://localhost:3000/${type}`)
    .pipe(
      tap(_ => this.log('fetched Card')),
      catchError(this.handleError<Card[]>('getCardList', []))
    );
  }

  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CardListService message */
  private log(message: string) {
    console.log(message);
  }

}
