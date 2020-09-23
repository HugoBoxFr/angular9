import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  link = 'http://localhost:3000/api/Users/login';

  constructor(
    private http: HttpClient
  ) { 
  }

  isLogged() {
    return !! localStorage.getItem('token');
  }

  login(credentials) {
    return this.http.post(this.link, credentials);
  }

  logout() {
    localStorage.removeItem('token');
  }
}
