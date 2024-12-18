<script>
export default {
    name: 'HeaderComponent',
}
</script>

<template>
  <div class="header">
    <div>
      <p>Header</p>
    </div>
    <div class="tab-page">
      <div class="btn">
        <RouterLink to="/page1">Page 1</RouterLink>
      </div>
      <div class="btn">
        <RouterLink to="/page2">Page 2</RouterLink>
      </div>
      <div class="btn">
        <RouterLink to="/page3">Page 3</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
}
.tab-page{
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.btn{
  cursor: pointer;
  text-decoration: underline;
}
</style>

