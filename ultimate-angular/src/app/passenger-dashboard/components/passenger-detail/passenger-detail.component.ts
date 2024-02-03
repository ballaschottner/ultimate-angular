import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Passengers } from "../../models/passenger.interface";

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <h3>Passengers</h3>
            <span class="status" [class.checked-in]="details.checkedIn"></span>
            <div *ngIf="editing">
                <input 
                    type="text" 
                    [value]="details.fullName"
                    (input)="onNameChange(name.value)"
                    #name>
            </div>
            <div *ngIf="!editing">
                {{details.fullName}}
            </div>
            <div>
                {{details.checkInDate ? (details.checkInDate | date: 'y.MMMM.d' | uppercase) : 'Not Checked In'}}
            </div>
            <div>
                Children: {{details.child?.length || 0}}
            </div>
            <button (click)="toggleEdit()">
                {{editing ? "Done" : "Edit"}}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `
})
export class PassengerDetailComponent implements OnInit, OnChanges{

    @Input()
    details!: Passengers;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();
    
    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    public editing: boolean = false;

    ngOnInit() {
        console.log(this.details);
    }

    ngOnChanges(changes: any): void {
        console.log('Changes',changes);
        if(changes.details) {
            this.details = Object.assign({}, changes.details.currentValue);
        }
    }

    onNameChange(value: string) {
        this.details.fullName = value;
    }

    toggleEdit() {
        if(this.editing) {
            this.edit.emit(this.details);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.details);
    }
};