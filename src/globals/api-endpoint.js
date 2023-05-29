import CONFIG from './config'

const API_ENDPOINT = {
  HOME: `${CONFIG.baseUrl}list`,
  DETAIL: (id) => `${CONFIG.baseUrl}detail/${id}`
}

export default API_ENDPOINT
