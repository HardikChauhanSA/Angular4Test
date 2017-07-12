import { NG4TestPage } from './app.po';

describe('ng4-test App', () => {
  let page: NG4TestPage;

  beforeEach(() => {
    page = new NG4TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
