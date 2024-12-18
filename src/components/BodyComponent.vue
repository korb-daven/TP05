<script>
export default {
    name: 'BodyComponent',
    props: ['page'],
}
</script>
<template>
  <div class="body">
    <div class="section">
      <div class="item">Menu</div>
      <div class="item">Section 1</div>
      <div class="item">Section 2</div>
      <div class="item">Section 3</div>
      <div class="item">Section 4</div>
    </div>
    <div class="content">
      <p class="text">This is the {{ page }}</p>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin-top: 2rem;
  display: flex;
  width: 100%;
  border-top: 1.5px solid #333940;
  
}
.section{
  margin-top: 25px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  
}

.content{
  width: 80%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item{
  border-bottom: 1.5px solid #333940;
  width: 100%;
  height: 50px;
  text-align: center;
  padding-top: 20px
}


</style>
