<template>
  <div class="slot">
    <header>
      <slot name="header"></slot>
    </header>
    <a
      v-bind:href="url"
      class="nav-link"
    > a标签 </a>
    <slot>默认slot值</slot> <!-- 将父组件引用本组件名字的替换掉 -->
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'SlotComponent',
  props: ['url'],
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