<template>
  <div v-if="loading" class="flex items-center justify-center py-6">
    <UISpinner />
  </div>
  <div v-else>
    <TweetFormInput
      :user="props.user"
      @on-submit="handleFormSubmit"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    default: "What's happening?",
  },
  replyTo: {
    type: Object,
    default: null,
  },
})

const emits = defineEmits(['onSuccess'])

const { postTweet } = useTweets()

const loading = ref(false)

const handleFormSubmit = async (data) => {
  loading.value = true
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id,
    })

    emits('onSuccess', response.tweet)
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
