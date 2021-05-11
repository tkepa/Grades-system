import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'
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
  newGrade: Grade = {
    id: '', 
    symbolicGrade: '', 
    descriptiveGrade: '', 
    minPercentage: 0, 
    maxPercentage: 0
  }

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

  addGrade(): void { 
    this.newGrade.id = `ungr-${uuidv4()}`
    this.gradesService.addGrade(this.newGrade as Grade).subscribe(grade => {
      this.grades.push(grade)
    })
  }

  deleteGrade(grade: Grade): void {
    this.grades = this.grades.filter(g => g !== grade);
    this.gradesService.deleteGrade(grade.id).subscribe();
  }

}
