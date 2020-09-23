import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  personne: Personne;

  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
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

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (res) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
