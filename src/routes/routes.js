import Home from '../scripts/views/pages/home-page'
import Detail from '../scripts/views/pages/detail-page'
import Like from '../scripts/views/pages/like'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/like': Like
}

export default routes
