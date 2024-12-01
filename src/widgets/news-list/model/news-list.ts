import "../types"
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewsListStore = defineStore("NewsListStore", () => {
  const newsList = ref<NewsListType[]>([])
  const loading = ref<boolean>(false)
  
  return { 
    loading,
    newsList
  }
})