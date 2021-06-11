import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { autoLogin, loginStart, loginSuccess, signupSuccess, signuStart } from './auth.actions';
import { exhaustMap, map, catchError, tap, mergeMap } from 'rxjs/operators';
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

    loginRedirect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(...[loginSuccess, signupSuccess]),//multi type for effect
                tap(() => {
                  this.store.dispatch(setErrorMessage({message : ''}))
                    this.router.navigate(['/']);
                })
            );
        },
        { dispatch: false }
    );

    signup$ = createEffect(() =>
        this.actions$.pipe(
            ofType(signuStart),
            exhaustMap((action) => {
                return this.authServ.signUp(action.email, action.password).pipe(
                    map((data) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const user = this.authServ.formatUser(data);
                        this.authServ.setUserInLocalStorage(user);
                        return signupSuccess({ user });
                    }),
                    catchError((errorResp) => {
                        this.store.dispatch(setLoadingSpinner({ status: false }));
                        const err = this.authServ.getErrorMessage(errorResp.error.error.message);
                        return of(setErrorMessage({message: err}));
                    })
                );
            })
        )
    );

    autoLogin$ = createEffect(()=>{
      return this.actions$.pipe(
        ofType(autoLogin),
        map((action) => {
            const user = this.authServ.getUserFromLocalStorage();
            console.log(user)
        }),
      )
    },{dispatch: false})


    // signUpRedirect$ = createEffect(
    //     () => {
    //         return this.actions$.pipe(
    //             ofType(signupSuccess),
    //             tap(() => {
    //                 this.store.dispatch(setErrorMessage({message : ''}))
    //                 this.router.navigate(['/']);
    //             })
    //         );
    //     },
    //     { dispatch: false }
    // );
}
