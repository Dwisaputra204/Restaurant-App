import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/AppBar';
import './components/ListItem';
import './components/MyFooter';
import './components/MyHeader';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  appbar: document.getElementsByTagName('app-bar')[0],
  header: document.getElementsByTagName('header')[0],
  button: document.getElementsByClassName('nav-mobile')[0],
  drawer: document.getElementsByClassName('nav-list-mobile')[0],
  content: document.getElementById('main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
