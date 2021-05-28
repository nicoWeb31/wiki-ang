import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<any>();
  input: string = '';

  constructor() { }



  ngOnInit(): void {
  }

  search(e:any){
    console.log(e.target.value)
    this.input = e.target.value;
  }

  onFormSubmit(e:any){
    e.preventDefault();
    console.log(this.input)
    this.submitted.emit({value: this.input});
  }

}
