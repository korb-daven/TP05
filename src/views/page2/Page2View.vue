<script>
import BodyComponent from '../../components/BodyComponent.vue';

export default {
  name: 'Page2View',
  components: {
    BodyComponent
  },
  props: ['section'],
  data() {
    return {
      page: "page2" 
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
