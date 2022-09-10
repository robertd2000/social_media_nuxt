<template>
  <div class="auth">
    <div class="image">
      <img
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
      />
    </div>
    <div class="form">
      <auth-form />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.auth {
  @apply flex h-screen;

  .image {
    @apply relative flex-1 hidden w-0 lg:block;

    > img {
      @apply absolute inset-0 object-cover w-full h-full;
    }
  }

  .form {
    @apply flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24;

    > div {
      @apply flex items-center w-full h-full max-w-sm mx-auto lg:w-96;
    }
  }
}
</style>
