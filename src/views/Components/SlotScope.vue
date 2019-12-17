<template>
  <div class="parent">

    <SlotScope>
    </SlotScope>
    <SlotScope>
      <template v-slot:child="slotProps">
        {{ slotProps }}
      </template>
    </SlotScope>
    <!-- 缩写语法 -->
    <SlotScope v-slot:child="slotProps">
      {{'独占默认插槽的缩写语法： ' + slotProps.childData.firstName}}
    </SlotScope>
    <!-- 结构写法 -->
    <SlotScope v-slot:child="{childData}">
      {{'结构写法: ' + childData.firstName}}
    </SlotScope>
    <!-- 具名缩写 v-slot 也有缩写，即把参数之前的所有内容 (v-slot:) 替换为字符 # -->
    <SlotScope #child="{childData}">
      {{'具名缩写： (v-slot:) 替换为字符 # ' + childData.firstName}}
    </SlotScope>
    
    <div class="todoList">
      <input v-model="info" /><button @click="addItem">添加</button>
      <ul>
        <TodoItem
          v-for="(item,index) in list"
          :key="index"
        >
          <template v-slot:item="itemProps">
            <span :style="{
             fontSize: '20px',
             color: itemProps.checked ? 'red' : 'blue'
           }">
              {{ item }}
            </span>
          </template>
        </TodoItem>
      </ul>
    </div>
    
  </div>
</template>

<script>

import SlotScope from '@/components/SlotComponent/SlotScope.vue'
import TodoItem from '@/components/SlotComponent/TodoItem.vue'

export default {
  components: {
    SlotScope,
    TodoItem
  },
  data() {
    return {
      user: {
        firstName: '唐纳尔多',
        lastName: '川普',
        name: '张三'
      },
      info: '',
      list: [],
      todoList:[{
        id: 1,
        msg: '吃饭'
      },{
        id: 3,
        msg: '喝水'
      },{
        id: 2,
        msg: '看定影'
      }],
      name:'你的名字',
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
    addItem() {
      this.list.push(this.info);
      this.info = ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

