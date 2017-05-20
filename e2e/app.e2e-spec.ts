import { WebsocketClientPage } from './app.po';

describe('websocket-client App', () => {
  let page: WebsocketClientPage;

  beforeEach(() => {
    page = new WebsocketClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
