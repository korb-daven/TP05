<script>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

<template>
  <div>
    <HeaderComponent />
    <RouterView />
    <FooterComponent/>
  </div>
</template>
