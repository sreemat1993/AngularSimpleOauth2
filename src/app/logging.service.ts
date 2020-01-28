import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {


  pageLog = {
    pageName: '',
    componentName: '',
    pageUrl: '',
    pageLoadTime: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }
}
