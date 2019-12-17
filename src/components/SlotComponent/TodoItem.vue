<template>
  <div class="slot-item">
    
    <li class="item">
      <input v-model="checked" type="checkbox">
      <span>作用域Slot：</span>
      <slot name="item" :checked="checked">
      </slot>
    </li>
  </div>
</template>

<script>

export default {
  data() {
    return {
      checked: false
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
  .slot-item {
    margin: 10px;
    border-radius: 4px;
    border: 1px solid red;
  }
</style>