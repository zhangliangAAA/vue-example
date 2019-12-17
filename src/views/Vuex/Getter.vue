<template>
  <div class="getter">
    <h3>Vuex - getter</h3>
    <p>{{getCount}}</p>
    <div>
      <ol style="text-align: left;">
        <p>TodoList列表：</p>
        <li
          v-for="todo in todos"
          :key="todo.title"
        >
          {{todo.title + '————' +  (todo.done ? '完成' : '未完成')}}
        </li>
      </ol>
      <p>todoList完成个数：{{doneTodosCount}}</p>

      <ol style="text-align: left;">
        <p>未完成列表：</p>
        <li
          v-for="todo in undoneTodos"
          :key="todo.title"
        >
          {{todo.title}}
        </li>
      </ol>

      <el-button
        type="primary"
        @click="GetTodoById"
      >GetTodoById</el-button>
    </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      account: '',
    }
  },
  computed: {
    ...mapGetters(['getCount']),
    ...mapGetters({
      todos: 'todoList' //别名操作
    }),
    doneTodosCount() {
      return this.$store.state.data.todoList.filter(todo => todo.done).length
    },
    undoneTodos() {
      return this.$store.getters.undoneTodos
    }
  },
  mounted() {
  },
  methods: {
    GetTodoById() {
      console.log(this.$store.getters.getTodoById(1));
    }
  }
}
</script>

<style lang="scss" scoped>
  .getter {
    border: 1px solid blue($color: #000000);
  }
</style>
