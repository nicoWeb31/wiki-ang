import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../models/post.model';
import { editPost } from '../state/posts.actions';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  editForm!: FormGroup;
  post!: Post;
  postSub!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>,
    private router: Router

    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSub = this.store
        .select(getPostById, { id })
        .subscribe((data) => {
          this.post = data;
          console.log(this.post);
        });
    });

    this.createform();
  }

  createform() {
    this.editForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onUpdatePost() {
    if (!this.editForm.valid) {
      return;
    }

    const title = this.editForm.value.title;
    const description = this.editForm.value.description;

    const post = {
      id: this.post.id,
      title,
      description,
    };
    /* -------------------------------- dispatch action-------------------------------- */
    this.store.dispatch(editPost({ post }));

    /* ------------------------------- redirectTo ------------------------------- */
    this.router.navigate(['posts'])
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
