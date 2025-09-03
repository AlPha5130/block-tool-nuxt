<script setup lang="ts">
const content = ref('')
const postId = useRoute().params.id
</script>

<template lang="pug">
#posts-edit
  MilkdownWrapper(v-model='content')
</template>
