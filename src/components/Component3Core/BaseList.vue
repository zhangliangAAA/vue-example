<template>
  <div class="list">
    <el-button @click="sort">排序</el-button>
    <p>{{name}}</p>
    <ul>
      <li v-for="todo in list" :key="todo.id">
         {{todo.msg}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['list','name'],
  data() {
    return {

    }
  },
  computed: {
    
  },
  created() {
  },
  mounted() {
    console.log('baseList',this)
  },
  methods: {
    sort() {
      console.log(this.$listeners)
    }
  }
}
</script>

<style lang="scss" scoped>
  .slot {
    margin: 10px;
    border-radius: 4px;
    border: 1px solid red;
  }
</style>