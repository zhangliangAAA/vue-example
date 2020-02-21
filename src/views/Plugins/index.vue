<template>
  <div class="plugins">
    <h1>插件：</h1>
    <button @click="globalClick">Vue.myGlobalMethod</button>
    <button @click="gClick">Vue.prototype.$myMethod</button>
    <p v-my-directive="{name:'123'}">自定义指令</p>
    <div>
      <input v-model="text"></input>
      <p>{{text | capitalize}}</p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
     text:'abc'
    }
  },

  computed: {
 
  },
  mounted() {
 
  },
  methods: {
    globalClick(){
      console.log(this);
      
      // this.myGlobalMethod()
    },
    gClick(){
      this.$myMethod()
    }
  }
}
</script>

<style lang="scss" scoped>
.plugins{
  border: 1px solid red;
  padding: 10px;
}
</style>
