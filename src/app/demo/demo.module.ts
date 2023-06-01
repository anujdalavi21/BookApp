import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoService } from './demo.service';
import { DemoComponent } from './demo.component';
import { BookComponent } from './book/book.component';




@NgModule({
  declarations: [DemoComponent, BookComponent],
  providers: [DemoService],
  imports: [
    CommonModule
  ],

  exports:[DemoComponent],
})
export class DemoModule { }
