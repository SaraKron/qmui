import { PQMuiPage } from './app.po';

describe('pqmui App', () => {
  let page: PQMuiPage;

  beforeEach(() => {
    page = new PQMuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
