import itemsTemplate from "../templates/galery-items.hbs";
import menu from "../menu.json"

const galeryRef= document.querySelector('.js-menu');


// console.log(menu);
const marcap = itemsTemplate(menu);
// console.log(marcap);
galeryRef.insertAdjacentHTML('beforeend',marcap);

