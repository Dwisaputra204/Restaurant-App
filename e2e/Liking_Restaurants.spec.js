const { pause } = require('codeceptjs');

/* eslint-disable no-undef */
Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('#restaurant');
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#restaurant');

  I.amOnPage('/');

  I.seeElement('.content-head a');
  I.click(locate('.content-head a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('figure');
  // … kita akan mengisi uji coba berikutnya …
});
