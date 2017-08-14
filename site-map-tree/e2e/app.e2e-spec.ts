import { SiteMapTreePage } from './app.po';

describe('site-map-tree App', () => {
  let page: SiteMapTreePage;

  beforeEach(() => {
    page = new SiteMapTreePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
