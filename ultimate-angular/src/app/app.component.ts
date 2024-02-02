import { Component } from '@angular/core';

interface Passengers {
  id: number,
  fullName: string,
  checkedIn: boolean
}
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],

 })
 export class AppComponent {
  name: string = '';

  handleChange(event: any) {
    this.name = event.target.value;
  }

  passengers: Passengers[] = [{
    id: 1,
    fullName: 'Stephen',
    checkedIn: true
  },
  {
    id: 2,
    fullName: 'Rose',
    checkedIn: false
  },
  {
    id: 3,
    fullName: 'James',
    checkedIn: true
  },]
 }