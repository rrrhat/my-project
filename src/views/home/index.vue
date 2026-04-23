<template>
  <el-card class="welcome-card">
    <div class="card-content">
      <img class="avatar" :src="userStore.avatar" alt="" />
      <div class="bottom">
        <h3 class="title">{{ getTime() }}好呀！！{{ userStore.username }}</h3>
        <p class="subtitle">硅谷甄选运营平台</p>
      </div>
    </div>
  </el-card>
  <div class="bottoms">
    <svg-icon name="welcome" width="700px" height="700px"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
//引入用户相关的仓库，获取当前用户的头像、昵称
import userUserStore from '@/store/modules/user'
import { getTime } from '@/utils/time'
let userStore = userUserStore()
</script>
<style lang="scss" scoped>
.card-content {
  display: flex;
  align-items: center;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .bottom {
    margin-left: 20px;
    .title {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 30px;
    }
    .subtitle {
      font-style: italic;
      color: skyblue;
    }
  }
}
.bottoms {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
:deep(.welcome-card) {
  width: 100% !important;
  display: flex;
  //align-items: center;
  padding: 20px;
  gap: 20px;
}
</style>
