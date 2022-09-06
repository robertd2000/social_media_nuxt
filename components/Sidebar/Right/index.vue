<template>
  <div class="flex flex-col">
    <!-- <div class="relative m-2">a</div> -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
        :key="whatsHappening.title"
      >
        <div class="sidebar-right">
          <h2>
            {{ whatsHappening.title }}
          </h2>

          <p>
            {{ whatsHappening.count }}
          </p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem
        v-for="whoToFollow in whoToFollowItems"
        :key="whoToFollow.name"
      >
        <div class="who-to-follow">
          <div class="who-to-follow-main">
            <img :src="whoToFollow.image" :alt="whoToFollow.name" />

            <div class="who-to-follow-name">
              <h1>
                {{ whoToFollow.name }}
              </h1>
              <p>{{ whoToFollow.handle }}</p>
            </div>
          </div>
          <div class="follow">
            <button>Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
import {
  WhatsHappeningItems,
  WhoToFollowItems,
} from '../../../constants/sidebar'
const whatsHappeningItems = ref(WhatsHappeningItems)

const whoToFollowItems = ref(WhoToFollowItems)
</script>

<style lang="scss" scoped>
.sidebar-right {
  > h2 {
    @apply font-bold text-gray-800 text-base dark:text-white;
  }

  > p {
    @apply text-xs text-gray-400;
  }
}

.who-to-follow {
  @apply flex flex-row items-center justify-between p-2;

  > .who-to-follow-main {
    @apply flex flex-row;
    > img {
      @apply w-10 h-10 rounded-full;
    }

    .who-to-follow-name {
      @apply flex flex-col ml-2;

      > h1 {
        @apply text-sm font-bold text-gray-900 dark:text-white;
      }

      > p {
        @apply text-xs text-gray-400;
      }
    }
  }

  .follow {
    @apply flex h-full;

    > button {
      @apply px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white;
    }
  }
}
</style>
