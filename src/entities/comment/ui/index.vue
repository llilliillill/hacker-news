<template>
  <section class="comment">
    <div class="comment__wrapper">
      <div class="comment__header">
        <span class="comment__title" v-html="comment.text" />
        <Button 
          v-show="comment.childIds?.length" 
          @click="getCommentsChild(comment.childIds)"
        >
          {{ open ? 'close' : 'open' }}
        </Button>
      </div>
      <div class="comment__footer">
        <div>{{ comment.date }}</div>
        <span>{{ comment.autor }}</span>
      </div>
    </div>
    <div v-show="open" class="comment__childs">
      <Comment 
        v-for="child in comment.childs" 
        :key="child.id" 
        :comment="child" 
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
  import "../types"
  import { getComments } from "../api"
  import { ref } from "vue"
  import { Comment } from "entities/comment";

  const open = ref<boolean>(false)

  const props = defineProps<{
    comment: CommentType,
    childs?: CommentType[]
  }>()

  const getCommentsChild = async (ids: number[]) => { 
    if (!open.value) props.comment.childs = await getComments(ids);
    open.value = !open.value
  }
</script>

<style lang="scss" scoped>
  @use "entities/comment/ui/styles.module.scss";
</style>