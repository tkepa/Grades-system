import { Grade } from './grade';
import { v4 as uuidv4 } from 'uuid';

export const GRADES: Grade[] = [
  {
    id: `ungr-${uuidv4()}`,
    symbolicGrade: 'F',
    descriptiveGrade: 'Bad performance',
    minPercentage: 0,
    maxPercentage: 30
  },
  {
    id: '2',
    symbolicGrade: 'E',
    descriptiveGrade: 'Bad performance',
    minPercentage: 31,
    maxPercentage: 49
  },
  {
    id: '3',
    symbolicGrade: 'D',
    descriptiveGrade: 'Bad performance',
    minPercentage: 50,
    maxPercentage: 72
  },
  {
    id: '4',
    symbolicGrade: 'C',
    descriptiveGrade: 'Bad performance',
    minPercentage: 73,
    maxPercentage: 89
  },
  {
    id: '5',
    symbolicGrade: 'B',
    descriptiveGrade: 'Bad performance',
    minPercentage: 90,
    maxPercentage: 99
  },
  {
    id: '6',
    symbolicGrade: 'A',
    descriptiveGrade: 'Bad performance',
    minPercentage: 100,
    maxPercentage: 100
  }
];
