<template>
  <div class="image">
    <h1>图片编辑页面</h1>
    <ImageEdit></ImageEdit>
  </div>
</template>

<script>
import ImageEdit from '@/components/ImageEdit.vue'

export default {
  name: 'home',
  components: {
    ImageEdit
  }
}
</script>