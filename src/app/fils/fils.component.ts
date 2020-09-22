import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("Fils C :", this.filsProperty)
  }

  sendEvent() {
    this.sendRequestToData.emit(
      `Please can I have some money ?`
    );
  }

}
