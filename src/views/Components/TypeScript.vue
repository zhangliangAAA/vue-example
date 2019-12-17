<template>
  <div class="parent">
    <Props 
      :list="todoList" 
      :type="'success'"
      title="属性值"
      :name="name">
    </Props>
  </div>
</template>

<script>

import Props from '@/components/Component3Core/Props'

export default {
  components: {
    Props
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

