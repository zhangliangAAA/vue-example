<template>
  <div class="parent">
    <OldSlot>
      <template slot="header">
        <h1>2.6之前Slot写法</h1>
      </template>
      <p>默认的Slot 1</p>
      <p>默认的Slot 2</p>
      <p slot="footer">具名Slot 简写</p>

      <template
        slot="scope"
        slot-scope="slotProps"
      >
        {{ slotProps }}
      </template>
      <p slot="scopeAcronym" slot-scope="props">{{props}}</p>
    </OldSlot>
    
  </div>
</template>

<script>
import OldSlot from '@/components/SlotComponent/OldSlot.vue'


export default {
  components: {
    OldSlot,
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

