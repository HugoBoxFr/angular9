import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  est = false;
  barca = false;
  milan = true;
  show = true;

  teams = [
    'est',
    'om',
    'barca',
    'milan'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeTeam() {
    this.est = true;
    this.barca = false;
    this.milan = false;
  }

}
