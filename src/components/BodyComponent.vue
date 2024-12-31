<script>
export default {
    name: 'BodyComponent',
    props: ['page', 'section'],
}
</script>
<template>
  <div class="body">
    <div class="section">
      <div class="item">Menu</div>
      <div class="item">
        <RouterLink :to="{path: `/${page}/section1`}">Section 1</RouterLink>
      </div>
      
      <div class="item">
        <RouterLink :to="{path: `/${page}/section2`}">Section 2</RouterLink>
      </div>
      <div class="item">
        <RouterLink :to="{path: `/${page}/section3`}">Section 3</RouterLink>
      </div>
      <div class="item">
        <RouterLink :to="{path: `/${page}/section4`}">Section 4</RouterLink>
      </div>
    </div>
    <div v-if="section === 'none'" class="content">
      <p class="text">This is the {{ page }}</p>
    </div>
    <div v-if="section !== 'none'" class="content">
      <p class="text">This is the {{ page }}</p>
      <p>----------------------------------------</p>
      <p class="text">This is the {{ section }} of the {{ page }}</p>
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
  flex-direction: column;
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
