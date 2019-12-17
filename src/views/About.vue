<template>
  <div class="about">
    <h1>This is an about page,数据共享count {{count}}</h1>
    <el-button @click="setCount(count+1)">+1</el-button>
  </div>
</template>
<script>
import { store, mutations } from '../store'

export default {
  data() {
    return {
     
    }
  },
  computed: {
    count(){
      return store.count
    }
  },
  mounted() {
    this.$myMethod()
  },
  methods: {
    setCount:mutations.setCount
  }
}
</script>

<style lang="scss" scoped>
.about{
  background-image: url('../assets/a2.jpg');
  border: 1px solid red;
  .parent{
    background-color: orange;
  }
}
</style>
