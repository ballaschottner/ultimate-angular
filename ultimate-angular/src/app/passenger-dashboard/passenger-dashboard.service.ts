import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Passengers } from "./models/passenger.interface";

@Injectable()
export class PassengerDashboardService {
    constructor(private http: HttpClientModule) {}

    getPassengers(): Passengers[] {
        return [{
            id: 1,
            fullName: 'Stephen',
            checkedIn: true,
            checkInDate: 1490742000000,
            child: [{name: 'Ben', age: 18}]
          },
          {
            id: 2,
            fullName: 'Rose',
            checkedIn: false,
          },
          {
            id: 3,
            fullName: 'James',
            checkedIn: true,
            checkInDate: 1490742000000,
            child: [{name: 'Ben', age: 18}]
          },]
    }
}