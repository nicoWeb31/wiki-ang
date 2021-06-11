import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/shared/state/shared.action';
import { AppState } from 'src/app/store/app.state';
import { signuStart } from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.signForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }


  onSignupSubmit(){
      if(!this.signForm.valid){
        return
      }
      const { email, password } = this.signForm.getRawValue();
      this.store.dispatch(setLoadingSpinner({ status: true}))
      this.store.dispatch(signuStart({email, password}));
  }

}
