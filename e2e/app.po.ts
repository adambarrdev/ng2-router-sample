export class Ng2RouterSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-router-sample-app h1')).getText();
  }
}
