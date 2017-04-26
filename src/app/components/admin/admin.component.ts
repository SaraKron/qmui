import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  sessionId: Observable<string>;

  constructor(private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.route.queryParams.forEach((params: Params) => {
      this.sessionId = params['session_id'];
    });
  }

}
