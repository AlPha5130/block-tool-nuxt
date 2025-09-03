<script setup lang="ts"></script>

<template lang="pug">
#auth-login
  #form-container
    form#login-form
      h1 Login
      label(for='username') Username:
      input#username(autocomplete='username' name='username' required type='text')
      label(for='password') Password:
      input#password(autocomplete='current-password' name='password' required type='password')
      button(type='button') Login
    p
      | Don't have an account?
      NuxtLink(to='/auth/signup') Sign up
      | or
      NuxtLink(to='/auth/forget') Forgot password?
</template>
