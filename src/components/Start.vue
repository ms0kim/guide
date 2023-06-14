<script setup>
import HeaderNav from './HeaderNav.vue';
</script>

<template>
  <HeaderNav />
  <div class="content">
    <div class="start">
      <h4>{{ $t( 'start.title' ) }}</h4>
      <img src="../assets/media/main.png" alt="" />
      <p>{{ $t( 'start.text' ) }} <b>{{ $t( 'start.textBold' ) }}</b></p>
    </div>
  </div>
</template>
