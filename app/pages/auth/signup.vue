<script setup lang="ts"></script>

<template lang="pug">
#auth-signup
  #form-container
    form#login-form
      h1 Sign up
      label(for='username') Username:
      input#username(autocomplete='username' name='username' required type='text')
      label(for='password') Password:
      input#password(autocomplete='new-password' name='password' required type='password')
      button(type='button') Sign up
    p
      | Already have an account?
      NuxtLink(to='/auth/login') Login
</template>
