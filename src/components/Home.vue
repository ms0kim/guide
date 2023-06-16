<script setup>
import HeaderNav from './HeaderNav.vue';
</script>

<template>
  <HeaderNav />
  <div class="content">
    <div class="home">
      <h4>{{ $t( 'home.title' ) }}</h4>
      <p>{{ $t( 'home.text' ) }} <b>{{ $t( 'home.textBold' ) }}</b></p>
      <h4>{{ $t( 'home.sub' ) }}</h4>
      <img src="../assets/media/mainview.jpg" alt="" />
      <p>{{ $t( 'home.subText' ) }}</p>
    </div>
  </div>
</template>
