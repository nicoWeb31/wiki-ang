import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  term: string = '';
  title = 'wiki-search';
  response: string[] = [];
  sub!: Subscription;

  constructor(private serviceSearch: SearchService) {}

  onTerm(e: any) {
    this.term = e.value;
    this.sub = this.serviceSearch.search(e).subscribe((result) => {
      console.log(result.query.search);
      this.response = result.query.results;
    });
  }
}
