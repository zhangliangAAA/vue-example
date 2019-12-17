<template>
  <div class="slot">
    <header>
      <slot name="header"></slot>
    </header>
    <slot>默认slot值</slot> <!-- 将父组件引用本组件名字的替换掉 -->
    <footer>
      <slot name="footer"></slot>
    </footer>
    <slot name="scope" :msg="msg"></slot>
    <slot name="scopeAcronym" :info="info"></slot>
  </div>
</template>

<script>

export default {
  props: [],
  data() {
    return {
      msg: '子类数据 父类获取',
      info:'缩写'
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
  .slot {
    margin: 10px;
    border-radius: 4px;
    border: 1px solid red;
  }
</style>