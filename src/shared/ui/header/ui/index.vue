<template>
  <section class="header">
    <h3 class="header__title">
      <slot name="title" />
    </h3>
    <slot name="actions" />
  </section>
</template>

<script lang="ts" setup>
  defineOptions({
    name: 'Header'
  })
</script>

<style lang="scss" scoped>
  @use "shared/ui/header/ui/styles.module.scss";
</style>
