import { MicrositePage } from './app.po';

describe('microsite App', () => {
  let page: MicrositePage;

  beforeEach(() => {
    page = new MicrositePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
