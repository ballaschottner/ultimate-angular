import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Passenger, Passengers } from "./models/passenger.interface";
import { Observable, map } from "rxjs";

const PASSENGER_API: string = './assets/db.json';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Passengers[]> {
      return this.http.get<Passenger>(PASSENGER_API)
      .pipe(
          map((response) => response.passengers)
      );
    }

    getPassenger(id: number): Observable<Passengers[]> {
      return this.http.get<Passenger>(`${PASSENGER_API}/${id}`)
      .pipe(
          map((response) => response.passengers)
      );
    }

    updatePassenger(passenger: Passengers): Observable<Passengers> {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      /* let options = new HttpRequest({
        headers: headers
      }); */
      return this.http
        .put(`${PASSENGER_API}/${passenger.id}`, passenger)
        .pipe(
          map((response: any) => response.passengers)
        );
    }

    removePassenger(passenger: Passengers): Observable<Passengers> {
      return this.http
        .delete(`${PASSENGER_API}/${passenger.id}`)
        .pipe(
          map((response: any) => response.passengers)
        );
    }
}