<template>
  <section>
    <News :id="Number($route.params.id)" />
  </section>
</template>

<script lang="ts" setup>
  import { News } from "widgets/news";
</script>

<style lang="scss" scoped>
  @use "pages/news/styles.module.scss";
</style>