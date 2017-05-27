import { MySecondProjectPage } from './app.po';

describe('my-second-project App', () => {
  let page: MySecondProjectPage;

  beforeEach(() => {
    page = new MySecondProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
