import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss']
})
export class AddCvComponent implements OnInit {
  errorMessage: string = '';

  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = "Probleme de connexion à votre serveur. Consulter l'adminitrateur.";
        console.log(error);
      }
    )
  }

}
