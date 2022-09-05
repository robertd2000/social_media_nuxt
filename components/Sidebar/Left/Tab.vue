<template>
  <nuxt-link to="#" class="tabs" :class="defaultTransition">
    <div class="icon-tab">
      <slot name="icon"></slot>
    </div>

    <div class="name-tab" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig()

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const textClasses = computed(() =>
  props.active ? 'font-semibold' : 'font-normal'
)
</script>

<style lang="scss" scoped>
.tabs {
  @apply flex items-center p-3 text-black rounded-full w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white;

  .icon-tab {
    @apply w-6 h-6;
  }

  .name-tab {
    @apply hidden ml-4 text-xl xl:block;
  }
}
</style>
