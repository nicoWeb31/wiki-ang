import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Post } from '../models/post.model';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(
    private store : Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.getRawValue());
    const post: Post = {
      id: (Date.now().toString()),
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(addPost({post}))
  }

  showDescriptionError(): any {
    const descriptionForm = this.postForm.get('description');

    if (descriptionForm?.touched && descriptionForm.valid) {
      if (descriptionForm?.errors?.required) {
        return 'Description  is required';
      }

      if (descriptionForm?.errors?.minlength) {
        return 'Description should have at least 10 char';
      }
    }
  }
}
