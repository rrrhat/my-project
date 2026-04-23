//定义用户相关数据的ts类型
//登录接口需要携带参数ts类型
export interface loginFormData {
  username: string
  password: string
}

//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
//定义登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string
}

//定义获取用户信息返回数据类型
export interface userInfoReponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}

/* 可以使用插件把json生成ts数据类型
Paste JSON as Code插件
超简版一句话总结
复制 JSON
Ctrl+Shift+P
选 Paste JSON as Code
选 TypeScript interface
输入名字 → 回车 */
