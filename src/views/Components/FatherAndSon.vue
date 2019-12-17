<template>
  <div class="parent">
    <div>
      <h1>数据共享count：{{count}}</h1>
      <button @click="setCount(count-1)">-1</button>
    </div>
  </div>
</template>

<script>
import { store, mutations } from '@/store'

export default {
  components: {

  },
  data() {
    return {

    }
  },
  computed: {
    count() {
      return store.count
    }
  },
  mounted() {
  },
  methods: {
    setCount: mutations.setCount
  }
}
</script>

<style lang="scss" scoped>
</style>

