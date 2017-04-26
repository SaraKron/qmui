import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { ProblemsService } from './problems.service';
import { Problems } from '../classes/problems';

@Injectable()
export class ProblemsResolverService {

  constructor(private ProblemsService: ProblemsService, private router: Router) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Problems> {
    const id = route.params['id'];

    return this.ProblemsService.findProblemById(id).then(problems => {
      if (problems) {
        return problems;
      } else { // id not found
        this.router.navigate(['/login']);
        return null;
      }
    });
  }

}
