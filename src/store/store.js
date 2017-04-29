/* 仓库文件 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
/* 访问状态对象  都是不变的 常量 */
const state = { //一般通过外部文件引入的，东西很多的。
  //定义数据 --- 类似data
  num: 12  //生成了一个静态的常量
}

/* 放方法  访问触发状态 */
const mutations = {
  //定义方法 --- 类似methods
  add(state,n){//state 是把上面的数据引入进来的
    console.log(n);
    state.num+= n.a;
  },
   minus(state){
     state.num--;
   }
}

const getters = {
  num:function (state) {
    return state.num += 0;
  }
}

const actions = {
  addPlus(context){//context代表了整个的store
    context.commit('add',{a:2}); //每次加2
    setTimeout(()=>{
        context.commit('minus');
    },3000)
    console.log('Actions中的加');
  },
  minusPlus({commit}){//commit
    commit('minus')
  }
}

const moduleA ={
  state,
  mutations,
  getters,
  actions
}

const moduleB ={
  state: {
    numB: 666
  }
}

export default new Vuex.Store({
  modules:{
    a:moduleA,
    b:moduleB
  }
});
