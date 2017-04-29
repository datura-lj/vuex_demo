<template>
  <div id="app">
    <!-- {{ $store.state.num }} -->  <!-- vue静态的常量   -->  <!-- $store是共有的意思 -->
    {{ count }}
    <div class="">
      <button type="button" name="buttonAdd" @click="$store.commit('add',{a:5})">加五个</button><!-- vue2.0  的写法 -->
      <button type="button" name="buttonAdd" @click="$store.commit('minus')">减一个</button>
      <hr/>
      <button type="button" name="buttonAdd" @click="add({a:10})">map=>加十个个</button><!-- 传值的话只需要在括号里传，但要注意格式 -->
      <button type="button" name="buttonAdd" @click="minus">map=>减一个</button>
      <hr/>
      <button type="button" name="buttonAdd" @click="addPlus">addPlus =>加二个</button>
      <button type="button" name="buttonAdd" @click="minusPlus">minusPlus</button>
      <hr>
        A模块组中的num => {{  $store.state.a.num }} => {{ countNew }}
        <br>
        B模块组中的num => {{  $store.state.b.numB }}
    </div>
  </div>
</template>

<script>
  /* 使用vuex中的数据，方式二,首先得引用 */
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      //count: 0 //操作count数据有两种方式，其一是计算属性，其二是生命周期
    }
  },
  /* 使用vuex中的数据，方式一 */
  /*computed: {
    count(){
      return this.$store.state.num + '：方式一获取的state数据';//this指的是main.js中的vue实例对象
    }
  }*/
  /* 使用vuex中的数据，方式二 */
  /*computed:mapState({
    // es箭头函数写法，好处箭头函数中的this有穿透效果，直接是上上级
    // count: state => state.num + '：方式二获取的state数据'
    // es5写法
    count:function (state) {
      return state.num + '：方式二获取的state数据'
    }
  })*/
  /* 使用vuex中的数据，方式三 不对数据进行计算 当数据较多的时候,数组形式 */
    /* computed:mapState([
    'counut'//这里必须state中的数据和此模板中的数据一个名字，也就类似组件定义的简写
  ])  */
  /* 使用vuex中的数据，方式四 不对数据进行计算  当数据较多的时候,json形式 */
  //  computed:mapState({
  //    count:'num'//引进是静态的
  //  }),
  computed:{
    ...mapState({
      count:'num'//引进是静态的
    }),
    countNew(){
      return this.$store.state.a.num
    },
    /*count(){
      return this.$store.getters.num
    }*/
    //map对象方式获取getters
    ...mapGetters({
      count:'num'//引进是静态的
    })
  },
   methods:{
     ...mapMutations([
       'add',
       'minus'
     ]),
     ...mapActions([
       'addPlus',
     ]),
     ...mapActions({
       minusPlus:'minusPlus'
     })
   }
}
</script>

<style>

</style>
