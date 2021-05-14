import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-nav',
  templateUrl: './panel-nav.component.html',
  styleUrls: ['./panel-nav.component.scss']
})
export class PanelNavComponent implements OnInit {
  title = null;
  switcher: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSwitch() {
    this.switcher = !this.switcher;
  }
}
