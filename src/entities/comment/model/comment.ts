import "../types"
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommentStore = defineStore("CommentStore", () => {

  const childs = ref<CommentType[]>([])

  return { 
    childs
  }
})