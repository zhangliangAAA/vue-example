<template>
  <div class="mutation">
    <h3>Vuex - mutation</h3>
    <p>在 Vuex 中，mutation 都是同步事务</p>
    <div>
      <p>{{count}}</p>
      <el-button @click="addNum">
        count ++
      </el-button>
    </div>
    <div>
      <el-input v-model="title"></el-input>
      <el-button
        type="primary"
        @click="addTodo"
      >AddTodo</el-button>
    </div>
    <div>
      <ol style="text-align: left;">
        <p>TodoList列表：</p>
        <li
          v-for="todo in todos"
          :key="todo.title"
        >
          {{todo.title + '————' +  (todo.done ? '完成' : '未完成')}}
          <el-button @click="toggle(todo)">toggle</el-button>
        </li>
      </ol>

    </div>

  </div>
</template>
<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: '',
    }
  },
  computed: {
    count(){
      return this.$store.state.data.count
    },
    ...mapGetters({
      todos: 'todoList' //别名操作
    })
  },
  mounted() {
  },
  methods: {
    ...mapMutations({
      add: 'increment', // 将 `this.add()` 映射为 `this.$store.commit('increment')` ???
    }),
    addTodo() {
     this.$store.commit('addTodo',{title:this.title})
     this.title = ''
    },
    toggle(todo){
      this.$store.commit('toggleTodoStatus',{id:todo.id})
    },
    addNum(){
      this.add()
    }
    
  }
}
</script>

<style lang="scss" scoped>
  .mutation {
    border: 1px solid blue($color: #000000);
  }
</style>
