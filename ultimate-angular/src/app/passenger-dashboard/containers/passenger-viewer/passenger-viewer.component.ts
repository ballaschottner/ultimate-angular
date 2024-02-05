import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../passenger-dashboard.service";
import { Passenger, Passengers } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    template: `
    <div>
       <!--  <passenger-form
            [detail]="passenger">
        </passenger-form> -->
    </div>
    `
})

export class PassengerViewerComponent implements OnInit{
    passenger: Passenger | undefined;
    constructor(private passengerService: PassengerDashboardService) {}
    ngOnInit() {
        this.passengerService
        .getPassenger(1)
        .subscribe((data: any) => this.passenger = data);
    }
};