import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../models/post.model';
import { getPosts } from '../state/posts.selector';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post$! : Observable<Post[]>;

  constructor(
    private store : Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.post$ = this.store.select(getPosts);
  }

}
