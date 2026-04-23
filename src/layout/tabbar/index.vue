<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb />
    </div>

    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script lang="ts" setup Setting>
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(245, 224, 224),
    rgb(241, 192, 192),
    rgb(209, 199, 254)
  );
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
//暗黑模式强制变黑
html.dark .tabbar {
  background: #1e1e1e !important;
  color: #ffffff !important;
}
</style>
