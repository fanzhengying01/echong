/**
 * Created by 10065 on 2018/3/21.
 */

import {RECALLBRANDS,RECBRAND,RECCATEGORYS,RECHOMEPAGE} from './musitiontype'

export default {
  [RECCATEGORYS](state,categorys){
    state.categorys = categorys
  },
  [RECHOMEPAGE](state,homepage){
    state.homepage = homepage
  },
  [RECBRAND](state,brand){
    state.brand = brand
  },
  [RECALLBRANDS](state,allbrands){
    state.allbrands = allbrands
  },

}
