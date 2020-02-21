<template>
  <div class="action">
    <h3>Vuex - Action</h3>
    <p>1、Action 提交的是 mutation，而不是直接变更状态。</p>
    <p>2、Action 可以包含任意异步操作。</p>

    <div class="info">
     <p>{{count}}</p>
      <el-button
        type="primary"
        @click="addNum"
      >Action-Count ++ 1s delayed</el-button>
      <el-button
        type="primary"
        @click="setCount"
      >Set-Count =10</el-button>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  },
  mounted() {
  },
  methods: {
    ...mapActions([
      'addCount'
    ]),
    addNum() {
      // this.$store.dispatch('addCount')
      this.addCount().then(()=>{
        console.log('Count ++')
      })
    },
    setCount(){

      // this.$store.dispatch('setCount',10) // 调用actions
      this.$store.commit('changeCount',11)  // 调用mutations
    }
  }
}
</script>

<style lang="scss" scoped>
  .action {
    border: 1px solid blue($color: #000000);
  }
</style>
