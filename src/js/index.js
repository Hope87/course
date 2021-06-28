import '../scss/styles.scss';
import '../fonts /stylesheet.css';

const myCarousel = document.querySelector('#slider_controls');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: false,
  wrap: true,
});
