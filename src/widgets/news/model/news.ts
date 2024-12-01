import "../types"
import { ref } from 'vue' 
import { defineStore } from "pinia";

export const useNewsStore = defineStore("NewsStore", () => {
  const loading = ref<boolean>(false)

  return { 
    loading
  }
})