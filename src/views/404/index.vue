<template>
  <div class="box">
    <div class="content">
      <img
        src="../../assets/images/error_images/404.png"
        alt="404 Not Found"
        class="image"
      />
      <div class="message">
        <h1 class="title">哎呀，页面走丢了</h1>
        <p class="desc">您访问的页面不存在或已被移除</p>
        <button @click="goHome" class="home-btn">
          <el-icon><House /></el-icon>
          返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { House } from '@element-plus/icons-vue'

const $router = useRouter()
const goHome = () => {
  $router.push('/home')
}
</script>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  margin: 0;
  padding: 0;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }

  .image {
    max-width: 400px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .title {
      font-size: 24px;
      font-weight: 600;
      color: #303133;
      margin: 0;
    }

    .desc {
      font-size: 14px;
      color: #909399;
      margin: 0;
    }

    .home-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 12px;
      padding: 10px 24px;
      background-color: #409eff;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #66b1ff;
        box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
      }
    }
  }
}
</style>
