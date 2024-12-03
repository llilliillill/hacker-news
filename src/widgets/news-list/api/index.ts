import { API_URL } from 'shared/config/http'
import { getDate, getDataNumber } from 'shared/helpers/date';
import { newsListModel } from "../model"
const store = newsListModel()

export const getNewsListIds = async () => {
  try {
    const req = await fetch(
      `${ API_URL }/beststories.json?print=pretty`, 
    )
    return (await req.json()).slice(0, 100)
  } catch (err) {
    console.error('Error:', err)
  }
}

export const getNews = async () => {
  const ids = await getNewsListIds()
  try {
    store.loading = true
    const req = ids.map((id: number) => 
      fetch(`${ API_URL }/item/${id}.json?print=pretty`)
    )
    const rows = await Promise.all(
      (await Promise.all(req)).map(res => res.json())
    )
    store.newsList = rows.map(news => {
      return {
        id: news.id,
        date: getDate(news.time),
        title: news.title,
        text: news.text,
        rating: news.score,
        autor: news.by
      }
    }).sort((a, b) => {
      return getDataNumber(b.date) - getDataNumber(a.date)
    })
  } catch (err) {
    console.error('Error:', err)
  } finally {
    store.loading = false
  }
}
