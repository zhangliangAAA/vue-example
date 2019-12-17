<template>
  <div class="slot-scope">
    <h3>作用域Slot：</h3>
    <slot name="child" :childData="childData">
      {{ childData.lastName }}
    </slot>
    <button @click="childData.count++">子类按钮改变数据</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      childData: {
        count: 0,
        firstName: '科比',
        lastName: '布莱恩特',
      },
    }
  },
  computed: {

  },
  created() {
  },
  mounted() {
  },
  methods: {
    download() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .slot-scope {
    margin: 10px;
    border-radius: 4px;
    border: 1px solid red;
  }
</style>