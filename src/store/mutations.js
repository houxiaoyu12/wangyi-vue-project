import {Data} from './mutation-types'

export default {
  [Data](state,{data}){
    state.data = data
  }
}
