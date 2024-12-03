import { API_URL } from 'shared/config/http'
import { getDate } from 'shared/helpers/date';
import { newsModel } from "../model"
const store = newsModel()

export const getComments = async (ids: number[]) => {
  try {
    const req = ids.map((id: number) => 
      fetch(`${ API_URL }/item/${ id }.json?print=pretty`)
    )
    const rows = await Promise.all(
      (await Promise.all(req)).map(res => res.json())
    )
    return rows.map(comment => {
      return {
        id: comment.id,
        date: getDate(comment.time),
        text: comment.text,
        autor: comment.by,
        childIds: comment.kids,
        childs: []
      }
    })
  } catch(err) {
    console.error('Error:', err)
  }
}

export const getNewsById = async (id: number) => {
  try {
    store.loading = true
    const res = await fetch(
      `${ API_URL }/item/${ id }.json`
    )
    const news = await res.json()
    const comments = await getComments(news.kids)
    
    return {
      id: news.id,
      title: news.title,
      link: news.url,
      date: getDate(news.time),
      autor: news.by,
      comments: comments
    }
  } catch(err) {
    console.error('Error:', err)
  } finally {
    store.loading = false
  }
}