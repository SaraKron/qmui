import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Problems } from '../../classes/problems';

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.sass']
})
export class TableOverviewComponent {

  @Input() source: any[] = [];

  sortType: string;
  reverse: boolean;
  isPreview: boolean;
  previewProblem: any;

  constructor(private router: Router) {
    this.sortType = 'titel';
    this.reverse = true;
    this.isPreview = false;
  }

  setSortType(newSortType) {
    this.reverse = (this.sortType === newSortType) ? !this.reverse : false;
    this.sortType = newSortType;
  }

  goToDetailPage(problem: Problems) {
    this.router.navigate(['detail', problem.id]);
  }

  showPreview(problem: Problems) {
     this.isPreview = this.isPreview ? false : true;
     this.previewProblem = problem;
  }

}
