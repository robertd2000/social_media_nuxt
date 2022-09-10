<template>
  <div class="wrapper" :class="twitterBorderColor">
    <div class="title">
      <h2>
        {{ props.title }}
      </h2>
    </div>

    <div v-if="props.loading" class="spinner" :class="twitterBorderColor">
      <UISpinner />
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  @apply border-x w-full;
  .title {
    @apply sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80;

    > h2 {
      @apply text-xl font-bold text-gray-800 dark:text-gray-100;
    }
  }

  .spinner {
    @apply flex items-center justify-center p-4 border-b;
  }
}
</style>
