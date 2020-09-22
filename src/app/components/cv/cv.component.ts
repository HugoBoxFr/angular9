import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/personne';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne: Personne;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (res) => {
        this.personnes = res;
        console.log(res)      },
      (error) => {
        alert("Problème d'accès à l'api, fake données");
        this.personnes = this.cvService.getFakePersonnes();
      }
    );
  }

  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }

}
