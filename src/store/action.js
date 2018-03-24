/**
 * Created by 10065 on 2018/3/21.
 */

import {RECALLBRANDS,RECBRAND,RECCATEGORYS,RECHOMEPAGE} from './musitiontype'
import {reqallbrands,reqbrand,reqcategorys,reqhomepage} from '../api/index'


export default {
  async getallbrands({commit},cb){
    const result = await reqallbrands()
    if(result.code === 0){
      const allbrands = result.data
      commit(RECALLBRANDS,allbrands)
      cb && cb()
    }
  },
  async getbrand({commit}){
    const result = await reqbrand()
    if(result.code === 0){
      const brand = result.data
      commit(RECBRAND,brand)
    }
  },
  async getcategorys({commit}){
    const result = await reqcategorys()
    if(result.code === 0){
      const categorys = result.data
      commit(RECCATEGORYS,categorys)
    }
  },
  async gethomepage({commit},cb){
    const result = await reqhomepage()
    if(result.code === 0){
      const homepage = result.data
      commit(RECHOMEPAGE,homepage)
      cb && cb()
    }
  }
}
