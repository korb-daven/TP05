<script>
import BodyComponent from '../components/BodyComponent.vue';

export default {
  name: 'Page1View',
  components: {
    BodyComponent
  },
  data() {
    return {
      page: "Page 1" 
    }
  }
};
</script>

<template>
  <div class="body">
    <BodyComponent :page="page"/>
  </div>
</template>

<style>
.body{
  height: fit-content;
}
</style>
