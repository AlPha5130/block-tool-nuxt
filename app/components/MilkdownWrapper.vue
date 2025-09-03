<script setup lang="ts">
import { MilkdownProvider } from '@milkdown/vue'

const { readonly = false } = defineProps<{ readonly?: boolean }>()
const content = defineModel<string>({ required: true })
</script>

<template lang="pug">
MilkdownProvider
  MilkdownEditor(v-model='content', :readonly='readonly')
</template>
