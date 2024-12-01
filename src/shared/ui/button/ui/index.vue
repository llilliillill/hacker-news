<template>
  <RouterLink 
    :to="href" 
    :class="`button ${ color }`"
  >
    <slot />
  </RouterLink>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router'

  defineOptions({
    name: 'Button'
  })

  withDefaults(defineProps<{
    color?: string,
    href?: string
  }>(), {
    href: ''
  })
</script>

<style lang="scss" scoped>
  @use "shared/ui/button/ui/styles.module.scss";
</style>