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

  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm) {
    const link = ['cv'];
    this.cvService.addPersonne(formulaire.value);
    this.router.navigate(link);
  }

}
