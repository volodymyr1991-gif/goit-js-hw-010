import itemsTemplate from '../templates/galery-items.hbs';
import menu from '../menu.json';

const galeryRef = document.querySelector('.js-menu');

const marcap = itemsTemplate(menu);

galeryRef.insertAdjacentHTML('beforeend', marcap);
