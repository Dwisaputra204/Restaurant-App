const assert = require('assert');
/* eslint-disable no-undef */
Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#restaurant');
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant');

  I.amOnPage('/');

  I.seeElement('.content-head a');
  const firstRestaurant = locate('.content-head a').first();
  const firstRestautantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('figure');
  const likedRestaurantTitle = await I.grabTextFrom('.content-head a');
  assert.strictEqual(firstRestautantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant');

  I.amOnPage('/');

  I.seeElement('.content-head a');
  const firstRestaurant = locate('.content-head a').first();
  const firstRestautantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('figure');
  const likedRestaurantTitle = await I.grabTextFrom('.content-head a');
  assert.strictEqual(firstRestautantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#restaurant');
  const noFavoriteRestaurant = await I.grabTextFrom('#restaurant');

  assert.strictEqual(noFavoriteRestaurant, 'Tidak ada restaurant untuk ditampilkan');
});
