import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/models/personne';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.scss']
})
export class EmbaucheComponent implements OnInit {
  personnes: Personne[];

  constructor(private embaucheSerive: EmbaucheService) { }

  ngOnInit(): void {
    this.personnes = this.embaucheSerive.getEmbauchees();
  }

}
