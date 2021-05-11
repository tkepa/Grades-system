import { Component, OnInit } from '@angular/core';
import { Grade } from '../grade';
//import { GRADES } from '../mock-grades'
import { GradesService } from '../grades.service';


@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {

  selectedGrade?: Grade;
  grades: Grade[] = [];
  

  constructor(private gradesService: GradesService) { }

  ngOnInit(): void {
    this.getGrades();
  }


  onSelect(grade: Grade): void {
    this.selectedGrade = grade;
  }


  getGrades(): void {
    this.gradesService.getGrades().subscribe(grades => this.grades = grades);
  }
}
