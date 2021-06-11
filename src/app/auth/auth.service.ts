import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authResponseData as AuthResponseData } from './models/auth-response.model';
import { User } from './models/user.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    uri = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRE_BASE_KEY}`;
    uriRegister = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRE_BASE_KEY}`;
    timeoutInterval: any;

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(this.uri, {
            email,
            password,
            returnSecureToken: true,
        });
    }

    formatUser(data: AuthResponseData) {
        const expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000);
        const user = new User(data.email, data.idToken, data.localId, expirationDate);
        return user;
    }

    getErrorMessage(message: string) {
        switch (message) {
            case 'EMAIL_NOT_FOUND':
                return 'Email not found';
            case 'INVALID_PASSWORD':
                return 'Invalid password';
            case 'EMAIL_EXISTS':
                return 'Email already exists';
            default:
                return 'Unknown error.please try again';
        }
    }

    signUp(email: string, password: string): Observable<AuthResponseData> {
        return this.http.post<AuthResponseData>(this.uriRegister, {
            email,
            password,
            returnSecureToken: true,
        });
    }

    setUserInLocalStorage(user: User) {
        localStorage.setItem('userData', JSON.stringify(user));
        this.runTimoutInterval(user);
      }


    runTimoutInterval(user: User) {
        const todays = new Date().getTime();
        const expireDate = user.expireDate.getTime();
        const timeinterval = expireDate - todays;
        this.timeoutInterval = setTimeout(() => {
            //logout or refreshToken
        }, timeinterval);
    }

    getUserFromLocalStorage() {
        const userData = localStorage.getItem('userData');
        if (userData) {
            const userD = JSON.parse(userData);
            const expirdate = new Date(userD.expiationDate);
            const user = new User(userD.email, userD.token, userD.localId, expirdate);
            this.runTimoutInterval(user)
            return user;
        }
        return null;
    }
}
