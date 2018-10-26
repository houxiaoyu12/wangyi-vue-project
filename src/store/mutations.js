import {Data,Banner,Home,Detail,LoginWay,Nav} from './mutation-types'

export default {
  [Data](state,{data}){
    state.data = data
  },
  [Banner](state,{banner}){
    state.banner = banner
  },
  [Home](state,{result}){
    const {home} = result
    state.home = home
  },
  [Detail](state,{result}){
    const {detail} = result
    state.detail = detail
    //console.log(result)
  },
  [LoginWay](state,loginWay){
    state.loginWay = loginWay
  },
  [Nav](state,{result}){
    const {nav} = result
    state.nav = nav
    //console.log(result)
  }

}
