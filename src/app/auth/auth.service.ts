import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRE_BASE_KEY}`

  constructor(
    private http : HttpClient,
  ) { }


  login(email: string,password: string) {
    return this.http.post(this.uri, {email,password, returnSecureToken : true})
  }
}
