import Swiper from 'swiper';
import { Navigation, Parallax } from 'swiper/modules';
import 'swiper/scss';

import { gsap } from 'gsap';

export function clientReviewsSwiper() {
  const swiper = new Swiper('.client-reviews__swiper', {
    modules: [Navigation, Parallax],
    speed: 500,
    spaceBetween: 200,
    direction: getDirection(),
    parallax: true,
    navigation: {
      prevEl: '.client-reviews__swiper-btn--prev',
      nextEl: '.client-reviews__swiper-btn--next',
      disabledClass: 'client-reviews__swiper-btn--disabled',
    },
    on: {
      init: () => {
        gsap.set('.client-reviews__client-images-item[data-client-image-index="0"]', { transform: 'none' });
        gsap.utils.toArray('.client-reviews__client-avatar-item').forEach((avatar, id) => {
          if (id > 0) {
            gsap.set(avatar, { right: id * 10 });
          }
        });
      },

      resize: () => {
        swiper.changeDirection(getDirection());
      },

      slideChange: (swiper) => {
        const prevClientImage = document.querySelector(`.client-reviews__client-images-item[data-client-image-index="${swiper.previousIndex}"]`);
        const activeClientImage = document.querySelector(`.client-reviews__client-images-item[data-client-image-index="${swiper.activeIndex}"]`);

        const prevAvatarImage = document.querySelector(`.client-reviews__client-avatar-item[data-client-avatar-index="${swiper.previousIndex}"`);
        const activeAvatarImage = document.querySelector(`.client-reviews__client-avatar-item[data-client-avatar-index="${swiper.activeIndex}"`);

        if (swiper.previousIndex > swiper.activeIndex) {
          gsap.to(prevAvatarImage, { ease: 'power2', opacity: 1 });
          gsap.utils.toArray('.client-reviews__client-avatar-item').forEach((avatar) => {
            const currentTranslateX = gsap.getProperty(avatar, 'x');

            if (avatar.getAttribute('data-client-avatar-index') !== prevAvatarImage.getAttribute('data-client-avatar-index')) {
              gsap.to(avatar, { ease: 'power2', duration: 0.3, x: currentTranslateX + 22 });
            }
          });

          gsap.set(activeClientImage, { ease: 'power2', xPercent: -100, yPercent: 100, rotate: -90 });
          gsap.to(activeClientImage, { transform: 'none' });
          gsap.to(prevClientImage, { ease: 'power2', xPercent: 100, yPercent: 100, rotate: 90, });
        } else {
          gsap.to(activeAvatarImage, { ease: 'power2', opacity: 0 });
          gsap.utils.toArray('.client-reviews__client-avatar-item').forEach((avatar) => {
            const currentTranslateX = gsap.getProperty(avatar, 'x');

            if (avatar.getAttribute('data-client-avatar-index') !== activeAvatarImage.getAttribute('data-client-avatar-index')) {
              gsap.to(avatar, { ease: 'power2', duration: 0.3, x: currentTranslateX - 22 });
            }
          });

          gsap.to(activeClientImage, { transform: 'none' });
          gsap.to(prevClientImage, { ease: 'power2', xPercent: -100, yPercent: 100, rotate: -90, onComplete: () => {
            gsap.set(prevClientImage, { ease: 'power2', xPercent: 100, yPercent: 100, rotate: 90 });
          } });
        }
      }
    }
  });

  function getDirection() {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const direction  = desktop.matches ? 'vertical' : 'horizontal';
    return direction;
  }
}
