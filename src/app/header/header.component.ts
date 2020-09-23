import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  visibility = false;

  constructor(
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  show() {
    this.visibility = !this.visibility;
  }

}
