import { FrontEndIMPPage } from './app.po';

describe('front-end-imp App', function() {
  let page: FrontEndIMPPage;

  beforeEach(() => {
    page = new FrontEndIMPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
