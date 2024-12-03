interface NewsType {
  id: number,
  title: string,
  link: string,
  date: string,
  autor: string,
  comments: CommentType[]
}

interface CommentType {
  id: number,
  date: string,
  text: string,
  autor: string,
  childIds: number[],
  childs: CommentType[]
}