import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NumbersComponent } from './numbers/numbers.component';
import { OperationComponent } from './operation/operation.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    OperationComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
