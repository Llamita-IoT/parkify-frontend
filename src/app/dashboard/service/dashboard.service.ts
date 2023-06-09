import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import {Slot} from "../model/Slot";
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  //Dashboard Endpoint
  basePath = "http://localhost:3000/api/v1/slots";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later.'));
  }

  /**
   * create new slot.
   * */
  createSlot(item: any): Observable<Slot> {
    return this.http.post<Slot>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  /**
   * get Slot by ID.
   * @param id = integer
   */
  getSlotById(id: any): Observable<Slot> {
    return this.http.get<Slot>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  /**
   * get all slot.
   * */
  getAllSlot(): Observable<Slot> {
    return this.http.get<Slot>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  /**
   * update slot
   */
  updateSlot(id: any, item: any): Observable<Slot> {
    return this.http.put<Slot>( `${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  /**
   * delete slot
   */
  deleteSlot(id: any): Observable<Slot> {
    return this.http.delete<Slot>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
