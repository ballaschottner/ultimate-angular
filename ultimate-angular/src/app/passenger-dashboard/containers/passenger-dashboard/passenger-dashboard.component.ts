import { Component, OnInit } from "@angular/core";
import { Passengers } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <passenger-detail
                *ngFor="let passenger of passengers"
                [details]="passenger"
            >
            </passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passengers[] = [];

    ngOnInit() {
        console.log('ngOnInit');
        this.passengers = [{
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