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
            <div *ngFor="let passenger of passengers;">
                {{passenger.fullName}}
            </div>
            <passenger-detail
                *ngFor="let passenger of passengers"
                [details]="passenger"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)"
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

    handleEdit(event: Passengers) {
        console.log(event);
        this.passengers = this.passengers.map((passengers: Passengers) => {
            if(passengers.id === event.id) {
                passengers = Object.assign({}, passengers, event);

            }
            return passengers;
        })
        console.log(this.passengers);
    }

    handleRemove(event: Passengers) {
        console.log(event);
        this.passengers = this.passengers.filter((passengers: Passengers) => {
            return passengers.id !== event.id;
        })
    }
  
}