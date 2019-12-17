const myMixin = {
  data () {
    return {
      message: 'mixin -msg',
      foo: 'mixin -foo'
    }
  },
  created() {
    console.log('This is myMixin log, created!')
    this.getList()
  },
  mounted() {
    // 混入对象的钩子将在组件自身钩子之前调用。
    console.log('This is myMixin log, mounted!')
  },
  methods: {
    hello(){
      console.log('This is myMixin log, methods-hello!')
    }
  }

}

export default myMixin