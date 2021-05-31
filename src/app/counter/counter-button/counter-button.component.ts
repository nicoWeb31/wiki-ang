import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent implements OnInit {
  @Output() decr = new EventEmitter<void>();
  @Output() incr = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onIncrement() {
    this.incr.emit();
  }

  onDecrement() {
    this.decr.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
