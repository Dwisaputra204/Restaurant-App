import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    appbar, header, button, drawer, content,
  }) {
    this.appbar = appbar;
    this.header = header;
    this.button = button;
    this.drawer = drawer;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      appbar: this.appbar,
      header: this.header,
      button: this.button,
      drawer: this.drawer,
      content: this.content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
