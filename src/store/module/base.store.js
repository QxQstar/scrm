const module = 'base_';
import {keyBy} from 'loadsh';
const state = {
  //人员列表
  member_list:'',
  member_list_obj:''
};
const mutations = {
  [module + 'member_list'](state,data){
    state.member_list = data;
    state.member_list_obj = keyBy(data,'member_id');
  }
};

const actions = {
  [module + 'member_list'](context,data){
    const {commit} = context;
    commit(module+'member_list',data);
  }
};

export default {
  state,
  mutations,
  actions
}
