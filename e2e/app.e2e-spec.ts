import { Af2LabsPage } from './app.po';

describe('af2-labs App', () => {
  let page: Af2LabsPage;

  beforeEach(() => {
    page = new Af2LabsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
