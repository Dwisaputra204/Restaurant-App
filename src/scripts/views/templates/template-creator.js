import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<figure>
  <div class="restaurant_header">
    <div>
      <h2 class="restaurant_name">${restaurant.name}</h2>
      <p>${restaurant.address}</p>
    </div>
    <div>
      <span>⭐</span>
      <span>${restaurant.rating}</span>
      ${restaurant.categories.map((category) => `<span class="chips category">${category.name}</span>`).join('')}
    </div>
  </div>
  <img src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.title}" />
  <div class="restaurant_information">
    <div class="restaurant_menu">
    <div>
      ${restaurant.menus.foods.map((food) => `<p class="chips food">🍔${food.name}</p>`).join('')}
      ${restaurant.menus.drinks.map((drink) => `<p class="chips drink">🍹${drink.name}</p>`).join('')}
    </div>
    <div class="restaurant_overview-container">
      ${restaurant.customerReviews.map((customerReview) => `
      <div class="restaurant_overview">
        <h3>${customerReview.name}</h3>
        <h5>${customerReview.date}</h5>
        <p>${customerReview.review}</p>
      </div>
      `).join('')}
    </div>
    </div>
  </div>
  </figure>
`;

const createRestaurantItemTemplate = (restaurant) => `
        <figure>
        <img src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}"
            alt="${restaurant.name}">
        <div class="content">
            <div class="content-head">
                <a href="#/detail/${restaurant.id}"><figcaption>${restaurant.name}</figcaption></a>
                <div>
                    <p class="city">${restaurant.city}</p>
                    <p class="rating">${restaurant.rating}</p>
                </div>
            </div>
            <div class="content-body">
                <p>${restaurant.description}</p>
            </div>
        </div>
        </figure>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
