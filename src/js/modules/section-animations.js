import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function heroAnimation() {
  const tl = gsap.timeline({ defaults: { opacity: 0, y: 20, ease: 'power2', duration: 0.5 } });
  tl.from('.hero__title', {})
    .from('.hero__descr', {});

  ScrollTrigger.create({
    animation: tl,
    trigger: '.hero',
    start: '-20% top',
  });
}

export function weAreTheBestAnimation() {
  const tl = gsap.timeline({ defaults: { opacity: 0, ease: 'power2', duration: 0.5, y: 20 } });
  tl.from('.we-are-the-best__title', {})
    .from('.we-are-the-best__descr', {});

  ScrollTrigger.create({
    animation: tl,
    trigger: '.we-are-the-best',
    start: '20% bottom',
  });
}

export function itemsAnimation(media) {
  const tl = gsap.timeline({ defaults: { opacity: 0, ease: 'power2', duration: 0.5, y: 20 } });
  tl.from('.items__title', {})
    .from('.items__descr', {});

  ScrollTrigger.create({
    animation: tl,
    trigger: '.items',
    start: '20% bottom',
  });

  const imageTl = gsap.timeline({ defaults: { opacity: 0, ease: 'power2' } });
  imageTl.from('.items__item[data-item="1"]', { xPercent: -100 })
    .from('.items__item[data-item="2"]', { yPercent: -100 })
    .from('.items__item[data-item="3"]', { xPercent: 100 })
    .from('.items__item[data-item="4"]', { yPercent: 100 });

  ScrollTrigger.create({
    animation: imageTl,
    trigger: '.items',
    start: `${media.matches ? '20%' : 'top'} top`,
    end: '+=2000',
    scrub: 1.5,
    pin: true
  });
}

export function clientReviewsAnimation() {
  const tl = gsap.timeline({ defaults: { opacity: 0, ease: 'power2', duration: 0.5, y: 20 } });
  tl.from('.client-reviews__title', {})
    .from('.client-reviews__descr', {});

  ScrollTrigger.create({
    animation: tl,
    trigger: '.client-reviews',
    start: '20% bottom',
  });
}

export function appAnimation() {
  const tl = gsap.timeline({ defaults: { opacity: 0, ease: 'power2', duration: 0.5, y: 20 } });
  tl.from('.app__title', {})
    .from('.app__descr', {})
    .from('.app__picture', { y: 0, x: -30 });

  ScrollTrigger.create({
    animation: tl,
    trigger: '.app',
    start: '20% bottom',
  });
}
