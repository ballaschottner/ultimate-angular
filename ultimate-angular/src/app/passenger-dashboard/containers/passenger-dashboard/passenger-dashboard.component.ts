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
            <passenger-detail>

            </passenger-detail>
            <h3>Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                <span class="status" [class.checked-in]="passenger.checkedIn"></span>
                {{ i + 1 }}: {{passenger.fullName}}
                <div>
                    {{passenger.checkInDate ? (passenger.checkInDate | date: 'y.MMMM.d' | uppercase) : 'Not Checked In'}}
                </div>
                <div>
                    Children: {{passenger.child?.length || 0}}
                </div>
                </li>
            </ul>
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