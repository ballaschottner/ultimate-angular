import { Component } from '@angular/core';

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
 }