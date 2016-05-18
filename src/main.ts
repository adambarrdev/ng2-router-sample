import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2RouterSampleAppComponent, environment } from './app/';
import { ROUTER_PROVIDERS } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2RouterSampleAppComponent, [ 
  ROUTER_PROVIDERS
]);
