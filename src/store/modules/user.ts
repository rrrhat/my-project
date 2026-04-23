//创建用户相关的小仓库
import { defineStore } from 'pinia'
//引入接口
import { reqLogin, reqUserInfo, reqLogout } from '@/api/user'
//引入数据类型
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from '@/api/user/type'
import type { userState } from './types/types'
//引入操作本地存储的方法
import { REMOVE_TOKEN } from '@/utils/token'
//引入路由（常量路由）
import { constantRoute, asyncRoute, anyRoute } from '@/router/routers'
import router from '@/router'
//引入深拷贝方法
import cloneDeep from 'lodash/cloneDeep'
//用于过滤当前用户需要展示的异步路由
function filterAsyncRoute(asyncRoute: any, routes: any) {
  //外面 return:把fi1ter得到的新数组返回出去
  return asyncRoute.filter((item: any) => {
    if (routes.includes(item.name)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsyncRoute(item.children, routes)
      }
      // 里面 return：告诉 filter 要不要保留这条路由
      return true
    }
    return false
  })
}
//创建用户小仓库
let userUserStore = defineStore('user', {
  state: (): userState => {
    //小仓库存储数据的地方
    return {
      token: '', //用户的唯一标识符token
      menuRoutes: constantRoute, //仓库存储生成菜单需要数组（路由）
      username: '',
      avatar: '',
      //存储当前用户是否包含某一个按钮
      buttons: [],
    }
  },

  //异步|逻辑的地方
  actions: {
    //用户登录的方法
    async userLogin(data: loginFormData) {
      //登录请求
      let result: loginResponseData = await reqLogin(data)
      //console.log('登录结果', result)
      if (result.code === 200) {
        this.token = String(result.data)
        //console.log('store里的token', this.token)
        return 'ok'
      } else {
        throw new Error('账号或密码错误')
      }
    },
    //获取用户信息方法
    async userInfo() {
      //获取用户信息进行存储仓库当中[用户头像、名字]
      let result: userInfoReponseData = await reqUserInfo()
      //如果获取用户信息成功，存储一下用户信息
      if (result.code == 200) {
        this.username = result.data.name
        this.avatar = result.data.avatar
        this.buttons = result.data.buttons
        //计算当前用户需要展示的异步路由
        let userAsyncRoute = filterAsyncRoute(
          cloneDeep(asyncRoute),
          result.data.routes
        )
        //菜单需要的数据整理完毕
        this.menuRoutes = [...constantRoute, ...userAsyncRoute]
        //目前路由器管理的只有常量路由：用户计算完毕异步路由、任意路由动态追加
        ;[...userAsyncRoute, ...anyRoute].forEach((route: any) => {
          router.addRoute(route)
        })
        return 'ok'
      } else {
        return Promise.reject(new Error('获取用户信息失败'))
      }
    },
    //退出登录
    async userLogout() {
      //退出登录请求
      let result: any = await reqLogout()
      if (result.code == 200) {
        this.token = ''
        this.username = ''
        this.avatar = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    },
  },
  getters: {},

  //开启持久化，数据就不会丢了
  persist: true,
})
//对外暴露小仓库
export default userUserStore
