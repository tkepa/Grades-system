import { Component, OnInit, Input } from '@angular/core';
import { Grade } from '../grade';
import { GradesService } from '../grades.service'

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})
export class GradeDetailComponent implements OnInit {

  @Input() grade?: Grade;

  constructor(
    private gradesService: GradesService
  ) { }

  ngOnInit(): void {
  }

  onKey(): void {
    this.gradesService.updateGrade(this.grade);
  } 

  update():void {
    
  }
}
