import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-out-put',
  templateUrl: './counter-out-put.component.html',
  styleUrls: ['./counter-out-put.component.css']
})
export class CounterOutPutComponent implements OnInit {

  @Input() counterC : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
