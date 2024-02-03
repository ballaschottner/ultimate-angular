import { Component, OnInit } from "@angular/core";
import { Passengers } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

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

    constructor(private passengerSvc: PassengerDashboardService) {}

    ngOnInit() {
        console.log('ngOnInit');
        this.passengerSvc.getPassengers()
        .subscribe((data) => this.passengers = data);
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