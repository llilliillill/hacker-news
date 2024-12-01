import { API_URL } from 'shared/config/http'
import { getDate } from 'shared/helpers/date';

export const getComments = async (ids: number[]) => {
  try {
    const req = ids.map((id: number) => 
      fetch(`${ API_URL }/v0/item/${ id }.json?print=pretty`)
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
  } catch (err) {
    console.error('Error:', err)
  } 
}