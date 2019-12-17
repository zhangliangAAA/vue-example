<template>
  <div class="parent">
    <Common 
      :msg="msg" 
      >
    </Common>
  </div>
</template>

<script>

import Common from '@/components/Component3Core/Common'

export default {
  components: {
    Common
  },
  data() {
    return {
      msg:'父类数据-Props传输',
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    fatherMethod() {
      console.log('这是你BB！')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

