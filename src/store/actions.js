import {reqData,reqBanner,reqHome,reqDetail} from '../api'

import {Data,Banner,Home,Detail,LoginWay} from './mutation-types'

export default {
  //获取首页data信息
  async getData({commit},cd){
    const result = await reqData()
    commit(Data,{data:result.data})
    cd && cd()
  },
  //获取首页轮播图的banner数据
  async getBanner({commit},cb){
    const result = await reqBanner()
    //console.log(result)
    commit(Banner,{banner:result.focusList})
    cb && cb()
  },
  //获取中间better-scroll的home数据
  async getHome({commit},cb){
    const result = await reqHome()
    //console.log(result)
    commit(Home,{result})
    cb && cb()
  },
  //获取detail页面
  async getDetail({commit},cb){
    const result = await reqDetail()
    commit(Detail,{result})
    //console.log(result)
    cb && cb()
  },
  //获取loginWay数据
  setLoginWay({commit},loginWay){
    commit(LoginWay,loginWay)
  }
}
