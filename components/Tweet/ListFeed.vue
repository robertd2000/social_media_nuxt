<template>
  <div>
    <div v-if="isEmptyArray" class="empty-list-feed">
      <p>No tweets 😢</p>
    </div>

    <div
      v-else
      class="list-feed"
      :class="[twitterBorderColor, defaultTransition]"
      v-for="tweet in props.tweets"
      :key="tweet"
      @click.native="redirect(tweet)"
    >
      <tweet-item :tweet="tweet" compact />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
})

const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const isEmptyArray = computed(() => props.tweets.length === 0)

const redirect = (tweet) => navigateTo(`/status/${tweet.id}`)
</script>

<style lang="scss" scoped>
.list-feed {
  @apply pb-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300;
}

.empty-list-feed {
  @apply p-4;

  > p {
    @apply text-center text-gray-500;
  }
}
</style>
