import FavoriteResto from '../../data/favorite-resto-idb'
import { createListResto } from '../templates/template-creator'

const Like = {
  async render () {
    return `
    <div id="mainContent" tabindex="0">
      <h2 class="daftar-label">Your Liked Restaurants</h2>
      <div id="restolikes" class="restolikes">
 
      </div>
    </div>
  `
  },

  async afterRender () {
    const restolike = await FavoriteResto.getAllResto()
    const restoContainer = document.querySelector('#restolikes')

    restolike.forEach((resto) => {
      restoContainer.innerHTML += createListResto(resto)
    })
    const skipLinkElem = document.querySelector('.skip-link')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#mainContent').focus()
    })
  }
}

export default Like
