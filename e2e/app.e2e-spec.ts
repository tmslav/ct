import { AutoSalonPage } from './app.po';

describe('auto-salon App', () => {
  let page: AutoSalonPage;

  beforeEach(() => {
    page = new AutoSalonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
