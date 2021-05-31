import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterOutPutComponent } from './counter-out-put/counter-out-put.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutPutComponent,
    CounterButtonComponent,
  ],
  imports: [CommonModule],
  exports: [CounterComponent, CounterOutPutComponent, CounterButtonComponent],
})
export class CounterModule {}
