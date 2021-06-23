import FavoriteRestaurantIdb from '../../data/favouriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div id="restaurant" class="restaurants">
 
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = 'Tidak ada restaurant untuk ditampilkan';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
