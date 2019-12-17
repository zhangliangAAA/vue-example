<template>
  <div class="parent">
    <h3>插槽：</h3>
    <SlotComponent url="https://www.baidu.com">
    </SlotComponent>
    <SlotComponent url="https://www.baidu.com">
      <!-- 则该组件起始标签和结束标签之间的任何内容将被 slot 标签替换 -->
      <span>父组件span</span>
      啦啦啦
      <span>父组件数据{{user.name}}</span>
      <!-- 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。 -->
    </SlotComponent>
    <SlotComponent url="https://www.baidu.com">
      <template v-slot:header>
        <h1>具名Slot header</h1>
      </template>
      <p>一个不带 name 的 slot 出口会带有隐含的名字“default”。</p>
      <template v-slot:footer>
        <p>具名Slot footer</p>
      </template>
    </SlotComponent>

  </div>
</template>

<script>
import SlotComponent from '@/components/SlotComponent'

export default {
  components: {
    SlotComponent
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

