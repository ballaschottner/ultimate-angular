import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective
  ],
  imports: [
    BrowserModule,
    AuthFormModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
