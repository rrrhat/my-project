//SKU模块接口管理
import request from '@/utils/request'
import type { SkuResponseData, SkuInfoData } from './type'
//枚举地址
const API: {
  SKU_URL: String
  SALE_URL: string
  CANCELSALE_URL: string
  SKUINFO_URL: string
  DELETE_URL: String
} = {
  SKU_URL: '/admin/product/list/',
  //上架
  SALE_URL: '/admin/product/onSale/',
  //下架的接口
  CANCELSALE_URL: '/admin/product/cancelSale/',
  //获取商品详情的接口
  SKUINFO_URL: '/admin/product/getSkuInfo/',
  //删除已有的商品
  DELETE_URL: '/admin/product/deleteSku/',
}
//获取商品SKU的接口
export const reqSkuList = (page: number, limit: number) =>
  request.get<any, SkuResponseData>(API.SKU_URL + `${page}/${limit}`)
//获取商品上架请求
export const reqSaleSku = (skuId: number) =>
  request.get<any, any>(API.SALE_URL + skuId)
//下架的请求
export const reqCancelSale = (skuId: number) =>
  request.get<any, any>(API.CANCELSALE_URL + skuId)
//获取商品详情的一个接口
export const reqSkuInfo = (skuId: number) =>
  request.get<any, SkuInfoData>(API.SKUINFO_URL + skuId)
//删除某一个已有的商品
export const reqRemoveSku = (skuId: number) =>
  request.delete<any, any>(API.DELETE_URL + `${skuId}`)
