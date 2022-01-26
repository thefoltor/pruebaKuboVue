<template>
   <nav><Toolbar/></nav>
   <router-view></router-view>
</template>

<script>

import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',
  components:{
    Toolbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

*{
  font-family: 'PT Sans';
}
</style>
