<script setup lang="ts">
const { signIn, signOut, status, session, cookies } = useAuth()


</script>

<template lang="pug">
#page-index
  button(@click='signIn(`minecraftwiki`)' type='button') Sign In
  button(@click='signOut()' type='button') Sign Out
  .info
    pre {{ status }}
    pre {{ session?.user }}
    pre {{ cookies }}
  .action(v-if='session?.user')
    
</template>
