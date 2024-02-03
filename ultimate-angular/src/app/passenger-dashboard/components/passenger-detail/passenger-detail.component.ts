import { Component, Input } from "@angular/core";
import { Passengers } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <h3>Passengers</h3>
            <span class="status" [class.checked-in]="details.checkedIn"></span>
            {{details.fullName}}
            <div>
                {{details.checkInDate ? (details.checkInDate | date: 'y.MMMM.d' | uppercase) : 'Not Checked In'}}
            </div>
            <div>
                Children: {{details.child?.length || 0}}
            </div>
        </div>
    `
})
export class PassengerDetailComponent{
    @Input()
    details!: Passengers;

    ngOnInit() {
        console.log(this.details);
    }
};