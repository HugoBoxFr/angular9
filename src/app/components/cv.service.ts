import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];

  constructor() { 
    this.personnes = [
      new Personne(1, "prea", "hugo", 37, "moi.png", 777, "développeur web"),
      new Personne(2, "pnth", "thomas", 27, "thomas.jpg", 222, "formateur"),
      new Personne(3, "kaas", "isa", 27, "isa.jpg", 111, "alternante"),
      new Personne(4, "test", "test", 45, "", 8888, "test"),
    ];
  }

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}
