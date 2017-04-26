import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Problems } from '../../classes/problems';
import { ProblemsService } from '../../services/problems.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent {

 @Input() previewProblem: any;

  constructor(private router: Router, private ProblemsService: ProblemsService) { }


  addComment(id: string, comment: string) {
    this.ProblemsService.addComment(id, comment);
  }

  goToDetailPage(problem: Problems) {
    this.router.navigate(['detail', problem.id]);
  }

}
