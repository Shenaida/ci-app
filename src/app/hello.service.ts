import { Injectable } from '@angular/core';
import {Hello} from './hello';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HelloService {
  private helloUrl = 'http://localhost:8080/hello';

  //GET hello from server
  getHello():Observable<Hello[]>{
    return this.http.get<Hello[]>(this.helloUrl)
      .pipe(
        catchError(this.handleError<Hello[]>('getHello', []))
      );
  }

  constructor(public http: HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  console.log("hallo")
      console.error(error, "hallol"); // log to console 
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
