import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {
  color = "white";
  bgColor = "lightblue";
  size = '25px';

  constructor() { }

  ngOnInit(): void {
  }

  changeSize(size) {
    this.size = size + "px";
  }

}
