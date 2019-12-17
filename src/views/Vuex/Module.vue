
<template>
  <div class="getter">
    <h3>Vuex - getter</h3>
    <div class="info">
     <p>{{}}</p>
      <el-button
        type="primary"
        @click="addNum"
      >Count ++</el-button>
    </div>

  </div>
</template>
<script>

export default {
  data() {
    return {
      account: '',
      password: ''
    }
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  mounted() {
  },
  methods: {
    addNum() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .getter {
    border: 1px solid blue($color: #000000);
  }
</style>
