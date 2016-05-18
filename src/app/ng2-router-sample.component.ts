import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './+home';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AboutComponent } from './+about';
import { NavComponent } from './nav';

@Component({
  moduleId: module.id,
  selector: 'ng2-router-sample-app',
  templateUrl: 'ng2-router-sample.component.html',
  styleUrls: ['ng2-router-sample.component.css'],
  directives: [ROUTER_DIRECTIVES, NavComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/about', component: AboutComponent}
])
export class Ng2RouterSampleAppComponent implements OnInit {
  title = 'ng2-router-sample works!';
  constructor(private router: Router){
    
  }
  ngOnInit(){
    this.router.navigate(['/home']);
  }
}
