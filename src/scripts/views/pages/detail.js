import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurant-db';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await RestaurantDbSource.detailRestaurant(url.id);
    const movieContainer = document.querySelector('#restaurant');
    movieContainer.innerHTML = createRestaurantDetailTemplate(movie);
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
