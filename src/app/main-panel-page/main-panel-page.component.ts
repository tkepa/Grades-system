import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-main-panel-page',
  templateUrl: './main-panel-page.component.html',
  styleUrls: ['./main-panel-page.component.scss']
})
export class MainPanelPageComponent implements OnInit {
  constructor(private headerTitleService: HeaderTitleService) {}

  ngOnInit(): void {
    this.headerTitleService.setTitle('Main Panel Page');
    this.headerTitleService.setButtonBack(false);
  }
}
