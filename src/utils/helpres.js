import URLS, {url} from './urls'

export const getTitle = url => {
  if (url === URLS.HOME) return 'Главная'
  if (url === URLS.STORE) return 'Магазин'
  if (url === URLS.BLOG) return 'Блог'
  if (url === URLS.CONTACTS) return 'Контакты'
  if (url === URLS.PARTNERS) return 'Партнеры'
  if (url === URLS.CART) return 'Корзина'
}

export const getIdOpenPage = () => {
  if (url === URLS.HOME) return 0
  if (url === URLS.STORE) return 1
  if (url === URLS.BLOG) return 2
  if (url === URLS.CONTACTS) return 3
  if (url === URLS.PARTNERS) return 4
  if (url === URLS.CART) return 5
}
