import { createApp } from 'vue'
import App from '@/App.vue'
//引入模板的全局样式
import '@/styles/index.scss'
//引用element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//配置element-plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//svg插件需要的配置代码
import 'virtual:svg-icons-register'
//引入自定义插件
import gloalComponent from '@/components'
//引入路由
import router from './router'
//引入仓库
import pinia from './store'
// 引入持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入路由鉴权文件
import './permission'
//引入路由鉴权文件
import { isHasButton } from '@/directive/has'

//获取应用实例对象
const app = createApp(App)
//安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})

/* import SvgIcon from "@/components/SvgIcon/index.vue";
//注册组件
app.component('SvgIcon', SvgIcon);
 */

//安装自定义插件
app.use(gloalComponent)
//注册模板路由
app.use(router)
//安装仓库
app.use(pinia)
//注册插件（关键）
pinia.use(piniaPluginPersistedstate)
//把app传过去
isHasButton(app)
//把应用挂载到挂载点上
app.mount('#app')
