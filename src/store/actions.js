import {reqData} from '../api'

import {Data} from './mutation-types'

export default {
  //获取首页data信息
  async getData({commit},cd){
    const result = await reqData()
    console.log('111111')
    commit(Data,{data:result.data})
    cd && cb()
  }
}
