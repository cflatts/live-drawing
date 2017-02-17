import { LiveDrawingPage } from './app.po';

describe('live-drawing App', function() {
  let page: LiveDrawingPage;

  beforeEach(() => {
    page = new LiveDrawingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
