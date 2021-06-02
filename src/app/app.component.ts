import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { SearchService } from './search.service';
import { getLoding, getMessageErr } from './shared/state/shared.selector';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'wiki-search';
  response: any[] = [];
  // sub!: Subscription;

  /* --------------------------------- loading -------------------------------- */
  showLoading$! : Observable<boolean> ;
  /* ------------------------------ error message ----------------------------- */
  errorsMessage$! : Observable<string> ;

  constructor(private serviceSearch: SearchService, private store: Store<AppState> ) {}


  ngOnInit() {
    this.showLoading$ = this.store.select(getLoding)
    this.errorsMessage$ = this.store.select(getMessageErr)
  }

  onTerm(e: any) {

    this.serviceSearch.search(e).subscribe((result) => {
      console.log(result.query.search);
      this.response = result.query.search;
    });
  }


}
