import { Component, OnInit } from '@angular/core';
import { Problems } from '../../classes/problems';
import { ProblemsService } from '../../services/problems.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent implements OnInit {

  problems: Problems[];

  constructor(private ProblemsService: ProblemsService) {

   }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.ProblemsService.getProblems().then(problems => this.problems = problems);
  }

}
