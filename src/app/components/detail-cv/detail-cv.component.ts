import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {
  @Input() personne: Personne;

  constructor(
    private embaucheService: EmbaucheService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

  moreInfo() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }

}
