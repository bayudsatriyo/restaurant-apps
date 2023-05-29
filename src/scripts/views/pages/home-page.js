import restoDbSource from '../../data/restoDB-source'
import { createListResto } from '../templates/template-creator'
import CONFIG from '../../../globals/config'

const Home = {
  async render () {
    return `
      <div class="hero" tabindex="0">
        <div class="hero_backdrop">
          <div class="hero__inner">
            <h1 class="hero__title">Sunan Restaurant</h1>
            <p class="hero__tagline">Kami menjamin bahwa setiap hidangan yang disajikan bukan hanya lezat, tetapi juga dipersembahkan dengan keindahan dan kecermatan yang sempurna.</p>
          </div>
        </div>
      </div>
      <div class="filosofi" tabindex="0">
        <div class="filheader">
          <h1>Philosophy</h1>
          <h2>of Sunan Resto</h2>
        </div>
        <div class="filosofi_description">
          <p>Kami percaya bahwa makanan yang baik tidak hanya tentang rasa, tetapi juga tentang pengalaman dan koneksi yang dibuat oleh hidangan yang disajikan. 
            Oleh karena itu, Sunan Resto berusaha untuk menciptakan restoran yang memadukan keindahan, kreativitas, dan kepedulian pada bahan-bahan segar dan berkualitas tinggi.</p>
        </div>
      </div>
      <section class="content">
      <div class="daftar-resto" id="mainContent" tabindex="0">
        <h1 class="daftar-label">Restaurant branch</h1>
        <div id="list_resto">
          
        </div>
      </div>
    </section>
      `
  },

  async afterRender () {
    // Fungsi ini akan dipanggil setelah render()
    const resto = await restoDbSource.home()
    const restoContainer = document.querySelector('#list_resto')
    resto.forEach((item) => {
      console.log(item);
      restoContainer.innerHTML += createListResto(item, CONFIG.image)
    })
  }
}

export default Home
