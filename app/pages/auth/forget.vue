<script setup lang="ts"></script>

<template lang="pug">
#auth-forget
  #form-container
    form#login-form
      h1 Forget Password
      label(for='username') Username:
      input#username(autocomplete='username' name='username' required type='text')
      button(type='button') Reset Password
    p
      | Remembered your password?
      NuxtLink(to='/auth/login') Login
</template>
