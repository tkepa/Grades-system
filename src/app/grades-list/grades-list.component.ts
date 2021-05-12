import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'
import { Grade } from '../grade';
//import { GRADES } from '../mock-grades'
import { GradesService } from '../grades.service';
import { HeaderTitleService } from '../header-title.service';


@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {

  selectedGrade?: Grade;
  grades: Grade[] = [];
  title = 'Grades List';

  constructor(private gradesService: GradesService, private headerTitleService: HeaderTitleService) { }

  ngOnInit(): void {
    this.getGrades();
    this.headerTitleService.setTitle('Grades System')
  }


  onSelect(grade: Grade): void {
    this.selectedGrade = grade;
  }


  getGrades(): void {
    this.gradesService.getGrades().subscribe(grades => this.grades = grades);
  }

  addGrade(): void { 
    const newGrade: Grade = {
      id: `ungr-${uuidv4()}`, 
      symbolicGrade: '', 
      descriptiveGrade: '', 
      minPercentage: 0, 
      maxPercentage: 0
    };
 
    this.gradesService.addGrade(newGrade as Grade).subscribe(grade => {
      this.grades.push(grade)
    })
  }

  deleteGrade(grade: Grade): void {
    this.grades = this.grades.filter(g => g !== grade);
    this.gradesService.deleteGrade(grade.id).subscribe();
  }

}
