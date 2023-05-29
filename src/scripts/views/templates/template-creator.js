import CONFIG from '../../../globals/config'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createListResto = (resto) => `
<div class="resto" tabindex="0">
<h3>${resto.city}</h3>
<img class="list_poster lazyload" src="${CONFIG.image + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous">
<p>Rate : ${resto.rating}</p>
<a href="/#/detail/${resto.id}">
${resto.name}</a>
<p class="description">${resto.description}</p>
</div>
`

const createDetailResto = (resto) => `
<img class="detail_poster lazyload" src="${CONFIG.image + resto.pictureId}" alt="${resto.name}" crossorigin="anonymous">
<div class="captions" tabindex="0">
<h2>${resto.name}</h2>
<h3>Kota : ${resto.city}</h3>
<p>Rate : ${resto.rating}</p>
<p>Detail Alamat : ${resto.address} ${resto.city}</p>
<h3>Kategori : </h3>
<ul class="categories">
</ul>
<p class="description">Deskripsi : ${resto.description}</p>
</div>
`

const costumerReviews = (review) => `
    <ul>
    <li class="nama">${review.name}</li>
    <li class="comment">comment : ${review.review}</li>
    <li class="date">${review.date}</li>
    </ul>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createListResto,
  createDetailResto,
  costumerReviews,
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
