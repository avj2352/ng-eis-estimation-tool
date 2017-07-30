import { NgEisEstimationToolPage } from './app.po';

describe('ng-eis-estimation-tool App', () => {
  let page: NgEisEstimationToolPage;

  beforeEach(() => {
    page = new NgEisEstimationToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
