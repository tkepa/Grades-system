import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Grade } from './grade';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const grades = [
      {
        id: `ungr- + ${uuidv4()}`,
        symbolicGrade: 'E',
        descriptiveGrade: 'Bad performance',
        minPercentage: 31,
        maxPercentage: 49
      },
      {
        id: `ungr- + ${uuidv4()}`,
        symbolicGrade: 'F',
        descriptiveGrade: 'Bad performance',
        minPercentage: 0,
        maxPercentage: 30
      },
      {
        id: `ungr- + ${uuidv4()}`,
        symbolicGrade: 'C',
        descriptiveGrade: 'Bad performance',
        minPercentage: 73,
        maxPercentage: 89
      },
      {
        id: `ungr- + ${uuidv4()}`,
        symbolicGrade: 'D',
        descriptiveGrade: 'Bad performance',
        minPercentage: 50,
        maxPercentage: 72
      },
      {
        id: `ungr- + ${uuidv4()}`,
        symbolicGrade: 'B',
        descriptiveGrade: 'Bad performance',
        minPercentage: 90,
        maxPercentage: 99
      },
      {
        id: `ungr- + ${uuidv4()}`,
        symbolicGrade: 'A',
        descriptiveGrade: 'Bad performance',
        minPercentage: 100,
        maxPercentage: 100
      }
    ];
    return { grades };
  }

  genId(grades: Grade[]): string {
    return grades.length > 0 ? `ungr-` + uuidv4() : '11';
  }
}
