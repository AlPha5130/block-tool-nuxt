<script setup lang="ts">
const content = ref('')
</script>

<template lang="pug">
#posts-edit
  MilkdownWrapper(v-model='content')
</template>
