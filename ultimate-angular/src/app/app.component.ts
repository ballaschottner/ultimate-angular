import { Component } from '@angular/core';

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],

 })
 export class AppComponent {
  name: string = 'Bence';

  handleChange(value: any) {
    this.name = value;
    console.log(value);
  }

  handleClick() {
    this.name = 'valami';
  }

  handleValue(value: string) {
    this.name = value;
    console.log(value)
  }
 }