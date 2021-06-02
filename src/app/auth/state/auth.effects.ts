import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authServ: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authServ.login(action.email, action.password).pipe(map((data) => {
          return loginSuccess();
        }))
      })
    );
  });
}
