<script>
import BodyComponent from '../../components/BodyComponent.vue';

export default {
  name: 'Page1View',
  components: {
    BodyComponent
  },
  props: ['section'],
  data() {
    return {
      page: "page1" 
    }
  }
};
</script>

<template>
  <div class="body">
    <BodyComponent :page="page" :section="section"/>
  </div>
</template>

<style>
.body{
  height: fit-content;
}
</style>
