//引入项目中全部的全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pgination from '@/components/Pagination/index.vue'
import type { App } from 'vue'
import Category from './Category/index.vue'
//引入element-plus提供的全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//全局对象
const allGloablComponment = { SvgIcon, Pgination, Category }
//console.log(allGloablComponment)
//对外暴露一个插件对象
export default {
  //务必叫做install方法
  install(app: App) {
    //注册项目全部的全局组件
    Object.keys(allGloablComponment).forEach((key) => {
      //注册为全局组件
      //@ts-ignore
      app.component(key, allGloablComponment[key])
      //将element-plus提供的图标注册为全局组件
      for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
    })
  },
}
