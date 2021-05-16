import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.scss']
})
export class PanelHeaderComponent implements OnInit {
  title = '';
  buttonCondition: string;

  constructor(
    private headerTitleService: HeaderTitleService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.headerTitleService.title.subscribe((title) => {
      this.title = title;
    });
    this.headerTitleService.buttonCondition.subscribe((buttonCondition) => {
      this.buttonCondition = buttonCondition;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
