import '../../images/logo.svg';
import '../../images/arrow-right.svg';
import '../../images/icon-user.svg';
import '../../images/icon-star.svg';
import '../../images/icon-harvest.svg';
import '../../images/icon-delivery-man.svg';
import '../../images/icon-shopping.svg';
import '../../images/icon-fast-time.svg';
import '../../images/star-full.svg';
import '../../images/star-half.svg';
import '../../images/arrow-swiper.svg';
import '../../images/app-store.svg';
import '../../images/google-play.svg';
import '../../images/instagram.svg';
import '../../images/twitter.svg';
import '../../images/facebook.svg';

import setSmoothScrollForAnchorLinks from '../modules/anchor-link';
import { clientReviewsSwiper } from '../modules/swipers';
import { appAnimation, clientReviewsAnimation, heroAnimation, itemsAnimation, weAreTheBestAnimation } from '../modules/section-animations';
import { mobileTablet } from '../modules/media';

document.addEventListener('DOMContentLoaded', () => {
  setSmoothScrollForAnchorLinks();
  clientReviewsSwiper();

  heroAnimation();
  weAreTheBestAnimation();
  itemsAnimation(mobileTablet);
  clientReviewsAnimation();
  appAnimation();
});
