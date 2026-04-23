//路由鉴权:鉴权，项目当中路由能不能被的权限的设置(某一个路由什么条件下可以访问、什么条件不可以访问)
import router from '@/router'
import nprogress from 'nprogress'
//引入进度条的一个样式
import 'nprogress/nprogress.css'
import setting from './setting'
nprogress.configure({ showSpinner: false })
//获取用户相关的小仓库内部token数据，去判断用户是否登录成功
import userUserStore from './store/modules/user'

//全局守卫:项目当中任意路由切换都会触发的钩子
//全局前置守卫
router.beforeEach(async (to: any, _from: any, next: any) => {
  document.title = `${setting.title}-${to.meta.title}`
  //to:你将要访问那个路由
  //from:你从来个路由而来
  //next:路由的放行函数next();
  nprogress.start()

  //获取token，去判断用户登录、还是未登录
  let userStore = userUserStore()
  let token = userStore.token
  //获取用户信息
  let username = userStore.username
  //用户登录的判断
  if (token) {
    //登陆成功，访问login，不能访问，指向首页
    if (to.path == '/login') {
      next({ path: '/' })
    } else {
      //登录成功访问其余六个路由(登录排除)
      //有用户信息
      if (username) {
        // ✅ 关键：判断路由是否存在！
        if (!router.hasRoute(to.name)) {
          // 路由不存在！说明刷新后动态路由丢了！
          // 必须重新加载用户信息 + 重新加路由！
          try {
            await userStore.userInfo()
            next({ ...to, replace: true })
          } catch (error) {
            await userStore.userLogout()
            next({ path: '/login', query: { redirect: to.path } })
          }
        } else {
          next()
        }
      } else {
        //如果没有用户信息，在守卫这里发请求获取到了用户信息再放行
        try {
          //获取用户信息
          await userStore.userInfo()
          //放行
          //万一:刷新的时候是异步路由，有可能获取到用户信息、异步路由还没有加载完毕，出现空白的效果
          next({ ...to, replace: true })
        } catch (error) {
          //token过期:获取不到用户信息了
          //用户手动修改本地存储token
          //退出登录->用户相关信息的数据清空
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    //用户未登录的判断
    if (to.path == '/login') {
      next()
    } else {
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
//全局后置守卫
router.afterEach(() => {
  nprogress.done()
})

//第一个问题:任意路由切换实现进度条业务 --nprogress插件
//第二个问题:路由鉴权(路由组件访问权限的设置)
//全部路由组件:登录|404|任意路由|首页|数据大屏|权限管理(三个子路由)|商品管理(四个子路由)

//用户未登录:可以访问login，其余六个路由不能访问(指向login)
//用户登录成功:不可以访问1ogin[指向首页]，其余的路由可以访问
