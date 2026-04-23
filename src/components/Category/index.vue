<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="一级分类">
        <el-select
          :disabled="scene == 0 ? false : true"
          v-model="categorystore.c1Id"
          @change="handler"
        >
          <!--1abel:即为展示数据,value:即为select下拉菜单收集的数据-->
          <el-option
            v-for="c1 in categorystore.c1Arr"
            :key="c1.id"
            :label="c1.name"
            :value="c1.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类">
        <el-select
          :disabled="scene == 0 ? false : true"
          v-model="categorystore.c2Id"
          @change="handel1"
        >
          <el-option
            v-for="c2 in categorystore.c2Arr"
            :key="c2.id"
            :label="c2.name"
            :value="c2.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类">
        <el-select
          :disabled="scene == 0 ? false : true"
          v-model="categorystore.c3Id"
        >
          <el-option
            v-for="c3 in categorystore.c3Arr"
            :key="c3.id"
            :label="c3.name"
            :value="c3.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts" setup>
//引入组件挂载完毕方法
import { onMounted } from 'vue'
//引入分类相关的仓库
import userCateGoryStore from '@/store/modules/category'
let categorystore = userCateGoryStore()
//分类全局组件挂载完毕，通知仓库发请求获取一级分类的数据
onMounted(() => {
  getC1()
})

//通知仓库获取一级分类的方法
const getC1 = () => {
  //通知分类仓库请求获取一级分类的数据
  categorystore.getC1()
}
//此方法即为一级分类下拉菜单的change事件（选中值的时候会触发，保证一级分类ID有了）
const handler = () => {
  //需要将二级，三级的数据清空
  categorystore.c2Id = ''
  categorystore.c3Arr = []
  categorystore.c3Id = ''
  //通知仓库获取二级分类的数据
  categorystore.getC2()
}
//此方法即为二级分类下拉菜单的change事件（选中值的时候会触发，保证二级级分类ID有了）
const handel1 = () => {
  //清理三级分类的数据
  categorystore.c3Id = ''
  //通知仓库获取三级级分类的数据
  categorystore.getC3()
}

//接收父组件传递过来scene
defineProps(['scene'])
</script>
<style lang="scss" scoped>
.el-form-item {
  width: 30%;
  margin: 0px 10px;
}
</style>
