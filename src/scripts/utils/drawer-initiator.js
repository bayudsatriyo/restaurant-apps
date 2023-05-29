const DrawerInitiator = {
  init ({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button)
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button)
    })
  },

  _toggleDrawer (event, drawer, button) {
    drawer.classList.toggle('open')
    button.setAttribute('hidden', '')
    event.stopPropagation()
  },

  _closeDrawer (event, drawer, button) {
    drawer.classList.remove('open')
    button.removeAttribute('hidden')
    event.stopPropagation()
  }
}

export default DrawerInitiator
