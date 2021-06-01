import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterOutPutComponent } from './counter-out-put/counter-out-put.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutPutComponent,
    CounterButtonComponent,
    CounterInputComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CounterComponent, CounterOutPutComponent, CounterButtonComponent],
})
export class CounterModule {}
