import { ImpPage } from './app.po';

describe('imp App', function() {
  let page: ImpPage;

  beforeEach(() => {
    page = new ImpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
