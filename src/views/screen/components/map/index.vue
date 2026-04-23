<!--  -->
<template>
  <div class="box4" ref="map"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
//引入中国地图的JSON数据
import chinaJSON from './china.json'
//获取DOM元素
let map = ref()
//注册中国地图
echarts.registerMap('china', chinaJSON as any)
onMounted(() => {
  let myechart = echarts.init(map.value)
  //设置配置项
  myechart.setOption({
    //地图的组件
    geo: {
      map: 'china', //中国地图
      roam: true, //鼠标缩放的效果
      //地图的位置调试
      left: 72,
      top: 66,
      right: 72,
      bottom: 0,
      //地图上的文字的设置
      label: {
        show: true, //文字显示
        color: 'white',
        fontSize: 14,
      },
      itemStyle: {
        //每一个多边形的样式
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#e2cbfc' },
            { offset: 1, color: '#b992f7' },
          ],
          global: false,
        },
        opacity: 0.8,
      },
      //地图高亮的效果
      emphasis: {
        itemStyle: {
          color: 'red',
        },
        label: {
          fontSize: 40,
        },
      },
    },
    //布局位置
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        type: 'lines', //航线系列
        data: [
          // 1. 北京 → 成都（西北-西南）
          {
            coords: [
              [116.405, 39.905],
              [104.066, 30.659],
            ],
          },
          // 2. 广州 → 重庆（南部-西南）
          {
            coords: [
              [113.264, 23.129],
              [106.552, 29.563],
            ],
          },
          // 3. 哈尔滨 → 杭州（东北-东部）
          {
            coords: [
              [126.535, 45.802],
              [120.154, 30.287],
            ],
          },
          // 4. 乌鲁木齐 → 昆明（西北-西南）
          {
            coords: [
              [87.616, 43.825],
              [102.712, 25.041],
            ],
          },

          // 5. 南宁 → 青岛（南部-东部）
          {
            coords: [
              [108.32, 22.824],
              [120.382, 36.067],
            ],
          },
        ],
        // 统一的样式设置
        lineStyle: {
          color: 'orange',
          width: 4,
        },
        //开启动画特效
        effect: {
          show: true,
          symbol:
            'path://M480.851711 510.053232v309.536122l-130.43346 128.486692-21.414449 75.923954 204.410647-132.380228 153.794676 132.380228 23.361217-75.923954-126.539924-128.486692V510.053232l336.790875 130.43346-3.893536-103.178707-332.897339-229.718631 27.254753-231.6654L510.053232 1.946768l-54.509506 73.977186 25.307985 231.6654L147.954373 537.307985 101.231939 640.486692l379.619772-130.43346z',
          //color: 'red',
          symbolSize: 30,
          color: '#fff',
          symbolRotate: 180,
          trailLength: 0,
        },
      },
    ],
  })
})
</script>
<style lang="less" scoped></style>
