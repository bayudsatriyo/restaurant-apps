import restoDbSource from '../../data/restoDB-source'
import UrlParser from '../../../routes/url-parse'
import { createDetailResto, costumerReviews } from '../templates/template-creator'
import LikeButtonPresenter from '../../utils/like-button-presenter'

const Detail = {
  async render () {
    return `
      <div id="mainContent" class="Detail" tabindex="0">
        <h1 class="daftar-label">Detail Restaurant</h1>
        <div id="detail_resto" class="detail_resto" tabindex="0">
        </div>
        </div>
        <div id="menuContainer">
        <h1 class="daftar-label">Daftar Menu</h1>
        <div id="menu">
        <div class="makanan">
        <h3>Daftar Makanan : </h3>
        <ul class="foods" tabindex="0">
        </ul>
        </div>
        <div class="minuman">
        <h3>Daftar Minuman : </h3>
        <ul class="drinks" tabindex="0">
        </ul>
        </div>
        </div>
        </div>
        <div id="Reviews" class="Reviews" tabindex="0">
        <h1 class="daftar-label">Costumer Reviews</h1>
        <div id="listReviews">
        </div>
        </div>
        <div id="likeButtonContainer" tabindex="0"></div>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await restoDbSource.detailResto(url.id)
    const mainContainer = document.querySelector('#detail_resto')
    mainContainer.innerHTML = createDetailResto(resto)
    const menuFood = document.querySelector('.foods')
    const categories = document.querySelector('.categories')
    const menuDrink = document.querySelector('.drinks')
    const listContainer = document.querySelector('#listReviews')
    const categori = resto.categories
    const foods = resto.menus.foods
    const drinks = resto.menus.drinks
    const reviews = resto.customerReviews
    getMenu(categori, categories)
    getMenu(foods, menuFood)
    getMenu(drinks, menuDrink)

    function getMenu (data, elemen) {
      data.forEach((datas) => {
        elemen.innerHTML += `<li>${datas.name}</li>`
      })
    }

    reviews.forEach((review) => {
      listContainer.innerHTML += costumerReviews(review)
    })

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating
      }
    })
  }
}

export default Detail
