import { InternDbPage } from './app.po';

describe('intern-db App', () => {
  let page: InternDbPage;

  beforeEach(() => {
    page = new InternDbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
