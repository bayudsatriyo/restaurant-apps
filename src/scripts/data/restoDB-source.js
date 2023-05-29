import API_ENDPOINT from '../../globals/api-endpoint'

const showResponseMessage = (message = 'Check your internet connection') => {
  alert(message)
}

class restoDbSource {
  static async home () {
    try {
      const response = await fetch(API_ENDPOINT.HOME)
      const responseJson = await response.json()
      if (responseJson.error) {
        showResponseMessage(responseJson.message)
      } else {
        return responseJson.restaurants
      }
    } catch (error) {
      showResponseMessage(error)
    }
  }

  static async detailResto (id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id))
      const responseJson = await response.json()
      if (responseJson.error) {
        showResponseMessage(responseJson.message)
      } else {
        return responseJson.restaurant
      }
    } catch (error) {
      showResponseMessage(error)
    }
  }
}

export default restoDbSource
