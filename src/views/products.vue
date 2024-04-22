<template>
  <div class="wrap">
      <div class="container">
          <mainView />
          <div>products.vue</div>
      </div>
  </div>
</template>

<script>
const mainView = require('../components/MainView.vue');
export default { components: { mainView } };
</script>