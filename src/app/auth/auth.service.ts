import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { authResponseData as AuthResponseData } from './models/auth-response.model';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRE_BASE_KEY}`

  constructor(
    private http : HttpClient,
  ) { }


  login(email: string,password: string) : Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(this.uri, {email,password, returnSecureToken : true})
  }

  formatUser(data : AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + +data.expiresIn *1000);
    const user = new User( data.email, data.idToken,data.localId, expirationDate);
    return user;
  }
}
