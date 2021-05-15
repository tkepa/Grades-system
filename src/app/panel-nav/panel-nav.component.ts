import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-nav',
  templateUrl: './panel-nav.component.html',
  styleUrls: ['./panel-nav.component.scss']
})
export class PanelNavComponent implements OnInit {
  title = null;
  switcher: Boolean = false;
  innerWidth: any;
  mediaCondition: boolean;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    this.mediaCondition = this.innerWidth >= 800 ? true : false;
  }

  onSwitch() {
    this.switcher = !this.switcher;
  }
}
