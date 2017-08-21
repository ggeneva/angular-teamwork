import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  currentPath: string;

  constructor(route: ActivatedRoute) {
    this.currentPath = route.snapshot.url.join('/');
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
