<template>
  <div class="parent">

    <div>
      <p>父组件msg：{{ msg }}</p>
      <p>父组件数组：{{ arr }}</p>
      <el-button @click="show = true">弹窗</el-button>
    </div>
    <BothwayProps :show.sync="show" :msg.sync="msg" :arr="arr"></BothwayProps>
  </div>
</template>

<script>

import BothwayProps from '@/components/Component3Core/BothwayProps'

export default {
  components: {
    BothwayProps
  },
  data() {
    return {
      msg:'初始msg-双向绑定',
      arr:['1','2','3'],
      show: false
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
</style>

