<template>
  <header>
    <div class="wrapper">
      <div class="nav-bar">
        <router-link to='/products'>상품목록</router-link>
        <router-link to="/favorites">즐겨찾기</router-link>
        <router-link to="/mypage">마이페이지</router-link>
        <router-link to="/test">TEST</router-link>
      </div>
    </div>
  </header>
  <body></body>
  <footer></footer>
  <router-view />
</template>

<script setup>
const RouterLink = require('vue-router').RouterLink;
const RouterView = require('vue-router').RouterView;
</script>

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
