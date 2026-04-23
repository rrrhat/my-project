<template>
<!--测试SVG图标使用-->
<!--svg：图标外侧的容器节点，内部需要与use标签结合使用-->
<!--href执行使用哪一个图标,属性值务必#icon-图标名字-->
<svg aria-hidden="true" :width="width" :height="height"> 
    <use :href="symbolId" :fill="color"></use>
</svg>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
//接受父组件传递的参数
const props = defineProps({
    //href属性值的前缀
    prefix:{
        type:String,
        default:'icon'
    },
    //提供使用的图标名字
    name: {
        type: String,
        required: true
    },
    //接受父组件传递颜色
      color: {
        type: String,
        default: ''
    },
    //接受父组件传递的图标宽度
      width: {
        type: String,
        default: ''
    },
    //接受父组件传递的图标高度
      height: {
        type: String,
        default: ''
    },

})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)


</script>
<style lang='less' scoped>
</style>