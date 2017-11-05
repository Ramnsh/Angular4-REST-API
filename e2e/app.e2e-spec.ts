import { Angular4RestServicePage } from './app.po';

describe('angular4-rest-service App', function() {
  let page: Angular4RestServicePage;

  beforeEach(() => {
    page = new Angular4RestServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
