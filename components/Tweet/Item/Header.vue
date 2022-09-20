<template>
  <div class="header">
    <div>
      <img :src="author.profileImage" alt="" class="header-img" />
    </div>

    <div class="header-info">
      <span class="header-name">
        {{ author.name }}
      </span>

      <span class="header-handle">
        <nuxt-link>
          {{ author.handle }}
          . {{ props.tweet.postedAt }}
        </nuxt-link>
      </span>

      <p v-if="props.tweet.replyTo">
        <span>
          Replying to
          <nuxt-link :to="replyToTweetUrl">
            {{ props.tweet.replyTo.author.handle }}</nuxt-link
          >
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tweet: {
    type: Object,
    required: true,
  },
})

const author = props.tweet.author
const replyToTweetUrl = computed(() => `/status/${props.tweet?.replyTo?.id}`)
</script>

<style lang="scss" scoped>
.header {
  @apply flex p-4;

  .header-img {
    @apply w-10 h-10 rounded-full;
  }

  .header-info {
    @apply ml-3;

    > .header-name {
      @apply font-medium text-gray-800 dark:text-white;
    }

    > .header-handle {
      @apply ml-3 text-sm font-medium text-gray-400;
    }

    > p {
      @apply text-sm;

      > span {
        @apply text-gray-500;

        > a {
          @apply text-blue-400;
        }
      }
    }
  }
}
</style>
