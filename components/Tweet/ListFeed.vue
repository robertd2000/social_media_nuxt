<template>
  <div>
    <ul>
      <li v-for="tweet in props.tweets" :key="tweet">
        {{ tweet }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
})
</script>
