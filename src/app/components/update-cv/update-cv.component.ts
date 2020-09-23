import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-update-cv',
  templateUrl: './update-cv.component.html',
  styleUrls: ['./update-cv.component.scss']
})
export class UpdateCvComponent implements OnInit {
  personne: Personne = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getPersonneById(params.id).subscribe(
          (res) => {
            this.personne = res;
          }
        )
      }
    );
  }

  updatePersonne() {
    this.cvService.updatePersonne(this.personne).subscribe(
      (res) => {
        const link = ['cv'];
        this.router.navigate(link);
      }
    );
  }

}
