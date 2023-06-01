import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DemoModule } from './demo/demo.module';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, FormsModule,DemoModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
