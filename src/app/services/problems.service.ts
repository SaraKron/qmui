import { Injectable } from '@angular/core';

import { Problems } from '../classes/problems';
import { PROBLEMS } from '../classes/data-problems';

@Injectable()
export class ProblemsService {

  constructor() { }

  getProblems(): Promise<Problems[]> {
      return Promise.resolve(PROBLEMS);
  }

  findProblemById(id: string) {
    return this.getProblems().then(function(problems) {
      for (let i = 0; i < problems.length; i++) {
        if (problems[i].id === id) {
          return problems[i];
        }
      }
    });
  }

  addComment(id: string, comment: string) {
    this.getProblems().then(function(problems) {
      for (let i = 0; i < problems.length; i++) {
        if (problems[i].id === id) {
          problems[i].comments.push(comment);
        }
      }
    });
  }

}
