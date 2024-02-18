<template>
  <div>
    <div class="container">
      <Nav />
      <RouterView />
    </div>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';

export default {
  components: { Nav, RouterView },
}
</script>
<style lang="scss"></style>