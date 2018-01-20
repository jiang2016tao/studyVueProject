/**
 * Created by Administrator on 2018/1/14.
 */
import getters from './getters'
import {INCREATE} from "./types"
const state={
  count:10
};

const mutations={
  [INCREATE](state){
    state.count++;
  }
}

export default {
  state,
  mutations,
  getters
}
