import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
}