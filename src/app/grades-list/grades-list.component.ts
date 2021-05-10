import { Component, OnInit } from '@angular/core';
import { Grade } from '../grade';
import { GRADES } from '../mock-grades';


@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {

  grades = GRADES;
  selectedGrade?: Grade;
  onSelect(grade: Grade): void {
    this.selectedGrade = grade;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
