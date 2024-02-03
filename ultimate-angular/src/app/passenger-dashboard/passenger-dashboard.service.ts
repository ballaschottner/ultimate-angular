import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Passengers } from "./models/passenger.interface";
import { Observable, map } from "rxjs";

const PASSENGER_API: string = '/API/PASSENGERS';

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClient) {}

    getPassengers(): Observable<Passengers[]> {
        return this.http
            .get(PASSENGER_API)
            .pipe(
                map((response: any) => {
                  // Assuming your response is an array of Passengers
                  return response;
                })
              );
    }
}