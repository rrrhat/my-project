export interface ResposeData {
  code: number
  maessage: string
  ok: boolean
}

//已有品牌的ts数据类型
export interface TradeMark {
  id?: number
  tmName: string
  logoUrl: string
}

//包含全部品牌数据的ts类
export type Records = TradeMark[]

//获取已有全部品牌的数据类型
export interface TradeMarkResposeData extends ResposeData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}
