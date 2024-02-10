import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div #entry></div>
    </div>
  `
})
export class AppComponent {
  
  @ViewChild('entry', { read: ViewContainerRef }) entry!: ViewContainerRef;

  constructor(
    //private createElement: ViewContainerRef
  ) {}

  loginUser(user: User) {
    console.log('Login', user);
  }

}