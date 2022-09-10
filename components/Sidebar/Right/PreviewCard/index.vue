<template>
  <div class="wrapper" :class="twitterBorderColor">
    <h1 :class="twitterBorderColor">
      {{ props.title }}
    </h1>

    <slot></slot>

    <div class="show-more" :class="defaultTransition">Show more</div>
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  @apply m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700;

  > h1 {
    @apply p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white;
  }

  .show-more {
    @apply p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300;
  }
}
</style>
