import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  moduleId: module.id,
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  styles: [".router-link-active { font-weight: bold; }"],
  directives: [ROUTER_DIRECTIVES, CollapseDirective]
})
export class NavComponent implements OnInit {
public isCollapsed:boolean = true;
  constructor() {}

  ngOnInit() {
  }

}
