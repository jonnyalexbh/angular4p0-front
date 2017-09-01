import { Angular4p0FrontPage } from './app.po';

describe('angular4p0-front App', () => {
  let page: Angular4p0FrontPage;

  beforeEach(() => {
    page = new Angular4p0FrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
