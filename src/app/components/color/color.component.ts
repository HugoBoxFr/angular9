import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  color = "red";
  color2 = "blue";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.color = params.default;
      }
    )
  }

  changeColor(input) {
    console.log(input);
    this.color = input.value;
    input.value = '';
  }

  processReq(message: any) {
    alert(message);
  }

  gotToCV() {
    const link = ['cv'];
    this.router.navigate(link);
  }

}
