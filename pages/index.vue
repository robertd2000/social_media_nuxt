<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>

      <div class="border-b" :class="twitterBorderColor">
        <TweetForm :user="user" />
      </div>

      <TweetListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()
const { useAuthUser } = useAuth()
const { getHomeTweets } = useTweets()

const homeTweets = ref([])

const loading = ref(false)
const user = useAuthUser()

onBeforeMount(async () => {
  loading.value = true
  const { tweets } = await getHomeTweets()

  homeTweets.value = tweets
  try {
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
})
</script>

<style></style>
