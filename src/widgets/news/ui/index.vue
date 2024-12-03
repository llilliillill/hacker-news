<template>
  <section v-if="news">
    <Header>
      <template #title>
        <span>{{ news?.title }}</span>
      </template>
      <template #actions>
        <Button href="/">back</Button>
      </template>
    </Header>

    <div class="news">
      <div class="news__item">
        <span class="news__title">Date:</span>
        <span class="news__text">{{ news?.date }}</span>
      </div>
      <div class="news__item">
        <span class="news__title">Title:</span>
        <span class="news__text">{{ news?.title }}</span>
      </div>
      <div class="news__item">
        <span class="news__title">Link:</span>
        <a :href="news?.link" target="_blank">{{ news?.link }}</a>
      </div>
      <div class="news__item">
        <span class="news__title">Autor:</span>
        <span class="news__text">{{ news?.autor }}</span>
      </div>
    </div>

    <Header>
      <template #title>
        <span>Comments list ({{ news?.comments.length }}):</span>
      </template>
      <template #actions>
        <Button 
          color="blue"
          @click="getNewsById(news?.id)"
        >
          {{ store.loading ? 'update...' : 'update comments' }}
        </Button>
      </template>
    </Header>
    
    <Comment
      v-for="comment in news?.comments"
      :key="comment.id"
      :comment="comment"
    />
  </section>
  <Loader v-else />
</template>

<script lang="ts" setup>
  import "../types"
  import { onMounted, ref } from "vue";
  import { getNewsById } from "../api"
  import { Comment } from "entities/comment";

  import { newsModel } from "../model";
  const store = newsModel()

  const props = defineProps<{
    id: number
  }>()

  const news = ref<NewsType>(null)

  onMounted(async () => {
    news.value = await getNewsById(props.id)
  })
</script>

<style lang="scss" scoped>
  @use "widgets/news/ui/styles.module.scss";
</style>