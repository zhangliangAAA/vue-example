<template>
  <div class="component">
    <h3>普通组件：</h3>
    <p>{{ msg }}</p>
    <el-button @click="callFather">$parent调用父类方法</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    console.log('--',this.$parent)
  },
  methods:{
    callFather(){
      this.$parent.fatherMethod()
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.component{
  border: 1px solid blue;
}
</style>
