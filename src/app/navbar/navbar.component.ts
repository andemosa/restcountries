import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  darkMode: boolean = false;
  @Output() state = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleMode() {
    this.state.emit(this.darkMode);
    this.darkMode = !this.darkMode;
  }
}
