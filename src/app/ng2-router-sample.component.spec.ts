import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2RouterSampleAppComponent } from '../app/ng2-router-sample.component';

beforeEachProviders(() => [Ng2RouterSampleAppComponent]);

describe('App: Ng2RouterSample', () => {
  it('should create the app',
      inject([Ng2RouterSampleAppComponent], (app: Ng2RouterSampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-router-sample works!\'',
      inject([Ng2RouterSampleAppComponent], (app: Ng2RouterSampleAppComponent) => {
    expect(app.title).toEqual('ng2-router-sample works!');
  }));
});
