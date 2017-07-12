import { NgmoabPage } from './app.po';

describe('ngmoab App', () => {
  let page: NgmoabPage;

  beforeEach(() => {
    page = new NgmoabPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
