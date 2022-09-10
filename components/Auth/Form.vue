<template>
  <div class="form">
    <div class="logo">
      <div>
        <LogoTwitter />
      </div>
    </div>
    <div class="input-wrapper">
      <UIInput
        v-model="data.username"
        label="Username"
        placeholder="@username"
      />
      <UIInput
        v-model="data.password"
        type="password"
        label="Password"
        placeholder="********"
      />

      <div>
        <button @click="handleLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  username: '',
  password: '',
  loading: false,
})

const handleLogin = async () => {
  console.log('vlicl')
  const { login } = useAuth()

  data.loading = true
  try {
    await login({
      username: data.username,
      password: data.password,
    })
  } catch (e) {
    console.log(e)
  } finally {
    data.loading = false
  }
}
</script>

<style lang="scss" scoped>
.form {
  @apply w-full;

  .logo {
    @apply flex justify-center;

    > div {
      @apply w-10 h-10;
    }
  }
  .input-wrapper {
    @apply pt-5 space-y-6;
  }
}
</style>
