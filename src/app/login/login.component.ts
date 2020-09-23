import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(credentials) {
    this.authService.login(credentials).subscribe(
      (res) => {
        const token = res.id;
        const link = ['cv'];
        this.router.navigate(link);
        localStorage.setItem('token', token);
      }
    );
  }

}
