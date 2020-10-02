import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css'],
})
export class BorderComponent implements OnInit {
  @Input() borderlist;

  constructor() {}

  ngOnInit(): void {
    console.log(this.borderlist);
  }
}
