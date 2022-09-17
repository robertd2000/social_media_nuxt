<template>
  <div class="left-sidebar">
    <div class="wrapper" :class="defaultTransition">
      <nuxt-link to="/">
        <div class="logo">
          <logo-twitter />
        </div>
      </nuxt-link>
    </div>

    <div class="icons">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name> Home </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name> Explore </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name> Notifications </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name> Messages </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name> Bookmarks </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name> Lists </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name> Profile </template>
      </SidebarLeftTab>

      <SidebarLeftTab>
        <template v-slot:icon>
          <DotsCircleHorizontalIcon />
        </template>
        <template v-slot:name> More </template>
      </SidebarLeftTab>

      <div class="tweet-btn-xl">
        <u-i-button liquid size="lg">
          <span> Tweet </span>
        </u-i-button>
      </div>

      <div class="tweet-btn-sm">
        <u-i-button>
          <div>
            <PencilIcon />
          </div>
        </u-i-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from '@heroicons/vue/solid/esm/index.js'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  PencilIcon,
  ChevronDownIcon,
} from '@heroicons/vue/outline/esm/index.js'

const { defaultTransition } = useTailwindConfig()
</script>

<style lang="scss" scoped>
.left-sidebar {
  @apply flex flex-col h-screen;

  .wrapper {
    @apply p-2 my-2 rounded-full hover:bg-blue-50 w-min dark:hover:bg-white/20;

    .logo {
      @apply w-8 h-8;
    }
  }

  .icons {
    @apply mt-2 space-y-3;

    .tweet-btn-xl {
      @apply hidden xl:block;
      span {
        @apply font-bold;
      }
    }

    .tweet-btn-sm {
      @apply block xl:hidden;

      div {
        @apply w-6 h-6 font-bold;
      }
    }
  }
}
</style>
