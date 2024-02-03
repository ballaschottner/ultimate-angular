import { Passengers } from "./models/passenger.interface";

export class PassengerDashboardService {
    constructor() {}

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