import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import menu from '../DATA.json';
import AppBar from './components/AppBar';
import ListItem from './components/ListItem';
import MyFooter from './components/MyFooter';
import MyHeader from './components/MyHeader';

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

// const listRestaurant = document.getElementById('main-content');
// menu.restaurants.map((item) => {
//   listRestaurant.innerHTML += `
//     <list-item
//     id="${item.id}"
//     name="${item.name}"
//     rating="${item.rating}"
//     description="${item.description}"
//     image="${item.pictureId}"
//     city="${item.city}"
//     ></list-item>`;
// });
