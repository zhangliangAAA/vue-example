<template>
  <div class="state">
    <h3>Vuex-state</h3>
    <div class="info">
     <p>count:{{count}}</p>
     <p>data别名:{{dataAlias}}</p>
     <p>countPlusLocalState:{{countPlusLocalState}}</p>
      <el-button
        type="primary"
        @click="addNum"
      >Count ++</el-button>
    </div>

  </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  data() {
    return {
      localCount: 1000
    }
  },
  // computed: {
  //   count(){ //从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
  //     return this.$store.state.data.count
  //   }
  // },
  computed: {
    ...mapState({
      count: state => state.data.count,
       // 传字符串参数 'data' 等同于 `state => state.data`
      dataAlias: 'data',
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.data.count + this.localCount
      }
    })
  },

  mounted() {
  },
  methods: {
    addNum() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style lang="scss" scoped>
  .state {
    border: 1px solid green;
  }
</style>
