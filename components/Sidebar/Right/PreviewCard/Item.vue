<template>
  <div :class="wrapperClasses">
    <slot></slot>
  </div>
</template>

<script setup>
const { defaultTransition, twitterBorderColor } = useTailwindConfig()
const wrapperClasses = computed(
  () => `${defaultTransition} ${twitterBorderColor}`
)
</script>

<style lang="scss" scoped>
div {
  @apply p-3 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300;
}
</style>
