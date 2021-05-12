import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs-compat/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class HeaderTitleService {
  public title = new BehaviorSubject('Title')

  constructor() { }

  setTitle(title) {
    this.title.next(title);
  }
}
