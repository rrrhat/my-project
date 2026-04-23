<template>
  <div class="box8">
    <div class="title">
      <p>数据统计</p>
      <img src="../../images/dataScreen-title.png" alt="" />
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
//获取DOM节点
let charts = ref()
//组件挂载完毕
onMounted(() => {
  //一个容器可以同时展示多种类型的图形图标
  let mychart = echarts.init(charts.value)
  //设置配置项
  let option = {
    title: {
      text: '游客的消费统计',
      textStyle: {
        color: 'white',
      },
    },
    radar: {
      indicator: [
        { name: '消费', max: 100 },
        { name: '好感', max: 100 },
        { name: '小吃', max: 100 },
        { name: '爱好', max: 100 },
        { name: '景点', max: 100 },
      ],
      name: {
        textStyle: {
          color: '#ffffff',
          fontSize: 12,
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(144, 224, 239, 0.5)',
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(144, 224, 239, 0.8)',
        },
      },

      center: ['50%', '45%'],
      radius: '70%',
    },
    grid: {
      left: 20,
      top: 20,
      bottom: 20,
      right: 0,
    },
    series: [
      {
        name: 'text',
        type: 'radar',
        areaStyle: {
          color: 'rgba(144, 224, 239, 0.3)',
        },
        lineStyle: {
          color: 'rgba(144, 224, 239, 0.8)',
          width: 2,
        },
        data: [
          {
            value: [60, 40, 50, 80, 70],
            name: 'text',
          },
        ],
      },
    ],
  }
  mychart.setOption(option)
})
</script>
<style lang="scss" scoped>
.box8 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 20px;
  .title {
    p {
      color: white;
      font-size: 18px;
      margin-bottom: 10px;
    }
  }
  .charts {
    height: calc(100% - 30px);
  }
}
</style>
