import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '../header-title.service';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.scss']
})
export class PanelHeaderComponent implements OnInit {

  title:string = '';

  constructor(private headerTitleService: HeaderTitleService) {

  }
  
  ngOnInit() {
    this.headerTitleService.title.subscribe(title => {
      this.title = title;
    })
  }

}
