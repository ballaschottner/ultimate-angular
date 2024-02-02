import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}
interface Passengers {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkInDate?: number | null,
  child?: Child[] | null,
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