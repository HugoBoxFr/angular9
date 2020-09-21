import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  // mettre la propriété qu'on veut gérer et créer son attribut
  @HostBinding('style.backgroundColor') bg = '';

  constructor() { }

  // ecouter/detecter l'evenement
  @HostListener('mouseenter') mouseenter() {
    this.bg = 'yellow';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = 'red';
  }

}
