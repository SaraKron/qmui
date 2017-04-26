import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProblemsService } from '../../services/problems.service';
import { Problems } from '../../classes/problems';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.sass']
})

export class DetailViewComponent implements OnInit {

  id: string;
  titel: string;
  module: string;
  dates: string;
  status: string;
  kpi: string;
  actions: string[];
  comments: string[];
  editComment: string[];
  involvedPersons: string[];
  description: string;
  tags: string[];

  constructor(private ProblemsService: ProblemsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { problem: Problems }) => {
      this.id = data.problem.id;
      this.titel = data.problem.titel;
      this.module = data.problem.module;
      this.dates = data.problem.dates;
      this.status = data.problem.status;
      this.kpi = data.problem.kpi;
      this.actions = data.problem.actions;
      this.comments = data.problem.comments;
      this.editComment = data.problem.comments;
      this.involvedPersons = data.problem.involvedPersons;
      this.description = data.problem.description;
      this.tags = data.problem.tags;
    });
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Fix me
    if (this.editComment.length === this.comments.length) {
      return true;
    }
    return window.confirm('Example canDeactivate');
  }

  addComment(comment: string) {
    this.ProblemsService.addComment(this.id, comment);
  }
}
