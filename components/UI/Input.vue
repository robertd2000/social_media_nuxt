<template>
  <div>
    <label for="" v-if="props.label" class="label">{{ props.label }}</label>

    <div class="input_wrapper">
      <input
        class="input"
        :value="props.modelValue"
        @input="(event) => emits('update:modelValue', event.target.value)"
        :type="props.type"
        :placeholder="props.placeholder"
      />
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: null,
  },
})
</script>

<style lang="scss" scoped>
.label {
  @apply block pl-3 ml-px text-sm font-medium text-gray-700;
}

.input_wrapper {
  @apply mt-1;
  > .input {
    @apply block w-full px-4 border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm;
  }
}
</style>
