<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import products from './views/products.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <products /> -->
      <div class="nav-bar">
        <RouterLink to="/products">상품목록</RouterLink>
        <RouterLink to="/favorites">즐겨찾기</RouterLink>
        <RouterLink to="/mypage">마이페이지</RouterLink>
        <RouterLink to="/test">TEST</RouterLink>
      </div>
    </div>
  </header>
  <!-- <body>
    
  </body> -->
  <RouterView />
</template>

<style scoped>
.nav-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  justify-content: space-around;
  background-color: #87b9ff;
  padding: 10px 0;
  margin: -16px;
  /* margin-top: -16px; */
}

.nav-bar a {
  text-decoration: none;
  color: white;
}
</style>
