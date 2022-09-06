<template>
  <div :class="{ dark: darkMode }">
    <div class="wrapper">
      <div class="wrapper-h">
        <div>
          <div class="sidebar-left">
            <div>
              <sidebar-left />
            </div>
          </div>
          <main class="main">
            <router-view />
          </main>
          <div class="sidebar-right">
            <div class="stick">
              <sidebar-right />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false)
</script>

<style lang="scss">
.wrapper {
  @apply bg-white dark:bg-dim-900;

  .wrapper-h {
    @apply min-h-full;
    > div {
      @apply grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5;

      .sidebar-left {
        @apply hidden md:block xs:col-span-1 xl:col-span-2;
      }

      .main {
        @apply col-span-12 md:col-span-8 xl:col-span-6;
      }

      .sidebar-right {
        @apply hidden col-span-12 md:block xl:col-span-4 md:col-span-3;
      }

      .stick {
        @apply sticky top-0;
      }
    }
  }
}
</style>
