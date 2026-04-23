import pinia from '@/store'
import userUserStore from '@/store/modules/user'

export const isHasButton = (app: any) => {
  //全局自定义指令：实现按钮的权限
  app.directive('has', {
    //获取对应的用户仓库
    //代表使用这个全局自定义指令的DoM|组件挂载完毕的时候会执行一次
    mounted(el: any, options: any) {
      // 每次挂载都拿最新的仓库数据
      let userStore = userUserStore(pinia)
      //自定义指令右侧的数值:如果在用户信息buttons数组当中没有
      //从DOM树上干掉
      if (!userStore.buttons.includes(options.value)) {
        el.parentNode.removeChild(el)
      }
    },
  })
}
