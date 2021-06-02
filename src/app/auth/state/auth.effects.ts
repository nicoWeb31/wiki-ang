import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { authResponseData } from '../models/auth-response.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setErrorMessage, setLoadingSpinner } from 'src/app/shared/state/shared.action';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authServ: AuthService,
        private store: Store<AppState>,
        private router: Router
    ) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authServ.login(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        this.store.dispatch(setErrorMessage({ message: '' }));

                        const user = this.authServ.formatUser(data);
                        return loginSuccess({ user });
                    }),
                    catchError((errorResp) => {
                        // console.log(errorResp.error.error.message);
                        const errorMessage = this.authServ.getErrorMessage(
                            errorResp.error.error.message
                        );
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        return of(setErrorMessage({ message: errorMessage }));
                    })
                );
            })
        );
    });

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap(() => {
                this.router.navigate(['/']);
            })
        );
    },{dispatch : false});
}
