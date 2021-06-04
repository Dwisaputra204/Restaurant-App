import RestaurantDbSource from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div id="home">
      <main id="main-content"></main>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.listRestaurant();
    const listRestaurant = document.getElementById('main-content');
    restaurants.forEach((restaurant) => {
      listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
