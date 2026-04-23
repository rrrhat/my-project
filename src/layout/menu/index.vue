<template>
  <template v-for="(item, index) in menuList" :key="item?.path || index">
    <!-- ✅ 先判断 item 存在！不存在直接跳过 -->
    <template v-if="item">
      <!-- 没有子路由 -->
      <template v-if="!item.children">
        <!-- ✅ 先判断 meta 存在！再读 hidden -->
        <el-menu-item
          :index="item.path"
          v-if="item.meta && !item.meta.hidden"
          @click="goRoute"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>

      <!-- 有且只有一个子路由 -->
      <template
        v-else-if="
          item.children && item.children.length === 1 && item.children[0]
        "
      >
        <!-- ✅ 先判断子路由的 meta 存在 -->
        <el-menu-item
          :index="item.children[0].path"
          v-if="item.children[0].meta && !item.children[0].meta.hidden"
          @click="goRoute"
        >
          <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
      </template>

      <!-- 有子路由且个数大于1 -->
      <template
        v-else-if="item.children && item.children.length > 1 && item.meta"
      >
        <el-sub-menu :index="item.path">
          <template #title>
            <el-icon>
              <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
          </template>
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      </template>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
//获取父组件传递过来的全部路由数组
const props = defineProps<{
  menuList: any[]
}>()

//获取路由器对象
let $router = useRouter()
//点击菜单的回调
const goRoute = (vc: any) => {
  //路由跳转
  $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>

<style lang="scss" scoped></style>
