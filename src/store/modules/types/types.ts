import type { RouteRecordRaw } from 'vue-router'
import type { CategoryBObj } from '@/api/product/attr/type'
//定义小仓库数据state类型
export interface userState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  username: string
  avatar: string
  buttons: string[]
}

//定义分类仓库state对象的ts类型
export interface CategoryState {
  c1Arr: CategoryBObj[]
  c1Id: string | number
  c2Arr: CategoryBObj[]
  c2Id: string | number
  c3Arr: CategoryBObj[]
  c3Id: string | number
}
