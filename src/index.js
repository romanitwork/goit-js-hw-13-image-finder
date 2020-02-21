import './styles.css';
import pixApi from './API/apiService.js';
import imgTemplate from './templates/imageTemplate.hbs';
const container = document.querySelector('.container');
const button = document.querySelector('.load-more');
const input = document.querySelector('input');
const search = document.querySelector('#search-form');
// import starGold from './images/star-gold.png';
// import starEmpty from './images/star-empty.png';
// const STAR = 'star';
let currentPage = 0;
button.addEventListener('click', loadOnClick);
search.addEventListener('submit', loadInputValue);
function parseData(data) {
  const containerPoint = imgTemplate(data);
  container.insertAdjacentHTML('beforeend', containerPoint);
}
function loadOnClick() {
  pixApi(input.value, ++currentPage, parseData);
}
function loadInputValue() {
  if (event.key === 'Enter') {
    event.preventDefault();
    container.innerHTML = '';
    loadOnClick();
  }
}
let _localStorage = {};
if (localStorage.getItem(STAR)) {
  _localStorage = JSON.parse(localStorage.getItem(STAR));
}
// container.addEventListener('click', onClick);
// function onClick(e) {

//   console.log(e);
//   if (e.target.className === 'favorite-item') {
//     const currentImgSrc = e.target.parentNode.querySelector('.photo-item').src;
//     console.log(_localStorage[currentImgSrc]);
//     _localStorage[currentImgSrc] =
//       _localStorage[currentImgSrc] === true ? false : true;
//       console.log(_localStorage[currentImgSrc]);
//     if (_localStorage[currentImgSrc] === true) {
//       e.target.setAttribute('src', starGold);
//     } else {
//       e.target.setAttribute('src', starEmpty);
//     }
//     localStorage.setItem(STAR, JSON.stringify(_localStorage));
//     console.log(_localStorage[currentImgSrc]);
//   }
// }
