interface CommentType {
  id: number,
  date: string,
  text: string,
  autor: string,
  childIds: number[],
  childs: CommentType[]
}