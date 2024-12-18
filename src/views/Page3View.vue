<script>
import BodyComponent from '../components/BodyComponent.vue';

export default {
  name: 'Page3View',
  components: {
    BodyComponent
  },
  data() {
    return {
      page: "Page 3" 
    }
  }
};
</script>

<template>
  <div class="body">
    <BodyComponent :page="page" />
  </div>
</template>

<style>
.body{
  height: fit-content;
}
</style>
