<template>
  <section v-if="store.newsList.length">
    <Header>
      <template #title>
        <span>News list:</span>
      </template>
      <template #actions>
        <Button 
          color="blue" 
          @click="getNews()"
        >
          {{ store.loading ? 'update...' : 'update news' }}
        </Button>
      </template>
    </Header>

    <ul class="news-list">
      <li class="news-list__item" 
        v-for="(news, i) in store.newsList" 
        :key="news.id"
      >
        <RouterLink :to="`/news/${ news.id }`">
          <div class="news-list__id">{{ i + 1 }}</div>
          <div class="news-list__date">{{ news.date }}</div>
          <div class="news-list__title">{{ news.title }}</div>
          <div class="news-list__rating">{{ news.rating }}</div>
          <div class="news-list__autor">{{ news.autor }}</div>
        </RouterLink>
      </li>
    </ul>
  </section>
  <Loader v-else />
</template>

<script lang="ts" setup>
  import "../types"
  import { onMounted } from "vue";
  import { getNews } from '../api'
  import { newsListModel } from "../model";
  const store = newsListModel()

  onMounted(async () => {
    if (!store.newsList.length) {
      await getNews();

      setInterval(async () => {
        await getNews();
      }, 60000)
    }
  })
</script>

<style lang="scss" scoped>
  @use "widgets/news-list/ui/styles.module.scss";
</style>