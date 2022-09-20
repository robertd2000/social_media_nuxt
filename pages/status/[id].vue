<template>
  <div>
    <MainSection title="Tweet" :loading="loading">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <TweetDetails :user="user" :tweet="tweet" />
    </MainSection>
  </div>
</template>

<script setup>
const tweet = ref(null)
const loading = ref(false)

const { getTweetById } = useTweets()
const { useAuthUser } = useAuth()
const user = useAuthUser()

onBeforeMount(() => {
  getTweet()
})

watch(
  () => useRoute().fullPath,
  () => getTweet()
)

const getTweetId = () => useRoute().params.id

const getTweet = async () => {
  loading.value = true
  try {
    const response = await getTweetById(getTweetId())

    tweet.value = response.tweet
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
</script>
