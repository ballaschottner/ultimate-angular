import { Component, Input } from "@angular/core";

import { Passengers } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-count',
    styleUrls: ['passenger-count.component.scss'],
    template: `
        <div>
            <h3>Passenger Count</h3>
            <div>
                Total passengers: {{checkInCount()}}/{{ items.length }}
            </div>
        </div>
    `
})
export class PassengerCountComponent{
    @Input()
    items: Passengers[] = [];

    checkInCount(): number | undefined {
        if (!this.items) return;
        return this.items.filter((passenger: Passengers) => passenger.checkedIn).length;
    }
};