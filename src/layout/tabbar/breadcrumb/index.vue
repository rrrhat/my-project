<template>
  <div class="left">
    <!-- 顶部左侧的静态 -->
    <el-icon style="margin-right: 10px" @click="changeIcon">
      <component :is="LayOutSttingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 左侧的面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
      <!-- 面包动态展示路由名字与标题 -->
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        v-show="item.meta.title"
        :to="item.path"
      >
        <!-- 图标 -->
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <!-- 面包屑展示匹配路由的标题 -->
        <span style="margin: 0px 5px; vertical-align: top">{{
          item.meta.title
        }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup Breadcrumb>
import { useRoute } from 'vue-router'
import userLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关的仓库
let LayOutSttingStore = userLayOutSettingStore()
//点击图标的方法
//获取路由对象
let $route = useRoute()
const changeIcon = () => {
  //图标进行切换
  LayOutSttingStore.fold = !LayOutSttingStore.fold
}
</script>
<style lang="scss" scoped>
.left {
  display: flex;
  align-items: center;
}
</style>
