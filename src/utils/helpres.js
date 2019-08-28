import URLS from './urls'

export const getTitle = (url) => {
  if (url === URLS.HOME) return 'Главная'
  if (url === URLS.STORE) return 'Магазин'
  if (url === URLS.BLOG) return 'Блог'
  if (url === URLS.CONTACTS) return 'Контакты'
  if (url === URLS.PARTNERS) return 'Партнеры'
}
