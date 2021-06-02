import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterOutPutComponent } from './counter-out-put/counter-out-put.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { FormsModule } from '@angular/forms';
import { CounterRoutingModule } from './counter.routing.module';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { COUNTER_STATE_NAME } from './state/couter-selectors';

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutPutComponent,
    CounterButtonComponent,
    CounterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CounterRoutingModule,
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
  ],
  exports: [CounterComponent, CounterOutPutComponent, CounterButtonComponent],
})
export class CounterModule {}
