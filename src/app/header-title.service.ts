import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  public title = new BehaviorSubject('Title');
  public buttonCondition = new BehaviorSubject('ButtonBack');
  constructor() {}

  setTitle(title): void {
    this.title.next(title);
  }
  setButtonBack(backButton): void {
    this.buttonCondition.next(backButton);
  }
}
