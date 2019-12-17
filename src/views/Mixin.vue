<template>
  <div class="mixin">
    <h1>Mixin Demo</h1>
    <p>{{message}}</p>
    <p>{{foo}}</p>
    <el-button @click="hello">mixin-hello</el-button>
  </div>
</template>
<script>

import myMixin from '@/mixin'

export default {
  mixins:[myMixin],
  data() {
    return {
      // 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
      message: 'mixin - father - msg',
      bar: 'def'
    }
  },
  computed: {

  },
  mounted() {
    console.log('mixin father log, mounted!')
  },
  methods: {
    getList(){
      console.log('father methods - getList')
    }
  }
}
</script>

<style lang="scss" scoped>
.mixin{
  border: 1px solid red;
  .parent{
    background-color: orange;
  }
}
</style>
