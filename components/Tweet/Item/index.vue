<template>
  <div>
    <TweetItemHeader :tweet="props.tweet" />

    <div :class="tweetBodyWrapper">
      <p class="item-text">
        {{ props.tweet.text }}
      </p>

      <div
        v-for="image in props.tweet.mediaFiles"
        :key="image.id"
        class="item-image"
        :class="twitterBorderColor"
      >
        <img :src="image.url" />
      </div>

      <div class="actions">
        <TweetItemActions :tweet="props.tweet" :compact="props.compact" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
  hideActions: {
    type: Boolean,
    default: false,
  },
})

const { twitterBorderColor } = useTailwindConfig()

const tweetBodyWrapper = computed(() => (props.compact ? 'ml-16' : 'ml-2 mt-4'))
</script>

<style lang="scss" scoped>
.item-text {
  @apply flex-shrink w-auto font-medium text-gray-800 dark:text-white;
}

.item-image {
  @apply flex my-3 mr-2 border-2 rounded-2xl;

  > img {
    @apply w-full rounded-2xl;
  }
}

.actions {
  @apply mt-2;
}
</style>
