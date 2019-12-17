<template>
  <div class="sort">
    <h1>{{name}}</h1>
    <!-- <el-button @click="onChange">change</el-button> -->
    <el-table
      :data="list"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="Id"
      >
      </el-table-column>
      <el-table-column
        prop="msg"
        label="信息"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  props: {
    name: String,
    //从父级传入的 type，它的值必须是指定的 'success', 'warning', 'danger'中的一个，如果传入这三个以外的值，都会抛出一条警告
    type: {
      validator: (value) => {
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    onChange: {
      //对于接收的数据，可以是各种数据类型，同样也可以传递一个函数
      type: Function,
      default: () => { console.log('default Function') }
    },
    isVisible: {
      type: Boolean,
      required: true,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }

  },
  components: {

  },
  data() {
    return {

    }
  },
  computed: {
  },
  created() {
  },
  mounted() {

  },
  methods: {

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