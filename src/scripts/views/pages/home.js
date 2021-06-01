import RestaurantDbSource from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <main id="main-content"></main>
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
