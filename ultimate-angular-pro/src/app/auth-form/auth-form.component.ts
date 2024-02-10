import { Component, Output, EventEmitter, ViewChildren, AfterViewInit, ContentChildren, QueryList, AfterContentInit, ChangeDetectorRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';

import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

import { User } from './auth-form.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'auth-form',
  styles: [`
  .email {border-color: #9f72e6;}`],
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel #email>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="auth-remember"></ng-content>
          <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage: boolean = false;

  @ViewChild('email') email!: ElementRef;

  @ViewChildren(AuthMessageComponent) message!: QueryList<AuthMessageComponent>;

  @ContentChildren(AuthRememberComponent) remember!: QueryList<AuthRememberComponent>;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(
    private cd: ChangeDetectorRef,
    private renderer: Renderer2
    ) {}

  ngAfterContentInit(): void {
    /* if(this.message) {
      this.message.days=30;
    } */
    if(this.remember) {
      console.log(this.remember)
      this.remember.forEach((item)=>{item.checked.pipe(tap(e=>console.log(e))).subscribe((checked: boolean) => {
        this.showMessage = checked;
      })})
      /* this.remember.checked.pipe(tap(e=>console.log(e))).subscribe((checked: boolean) => {
        this.showMessage = checked;
      }) */
    };
  }

  ngAfterViewInit(): void {
    this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
    this.renderer.setStyle(this.email.nativeElement, 'email', true);
    this.renderer.selectRootElement(this.email.nativeElement).focus();
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
    console.log(this.email.nativeElement);
    console.log(this.message);
    if(this.message) {
      this.message.forEach((message)=> {
        message.days = 30;
      })
      this.cd.detectChanges;
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}
