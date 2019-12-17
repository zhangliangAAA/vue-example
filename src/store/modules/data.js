let Id = 1000

const data = {
  state: {
    count: 0,
    staticState: '静态数据- Hello world !',
    todoList:[{
      id: 1,
      title: '吃饭',
      done: true
    },{
      id: 2,
      title: '看定影',
      done: false
    }]
  },

  mutations: { //同步改变state
    increment(state){  // 这里的 `state` 对象是模块的局部状态
      state.count ++ 
    },
    changeCount(state,count){
      state.count = count
    },
    addTodo(state,payload){
      state.todoList.push({
        id: Id++,
        title: payload.title,
        done: false
      })
    },
    toggleTodoStatus(state,payload){
      state.todoList.forEach(todo => {
        if(todo.id === payload.id){
          todo.done = !todo.done
        }
      })
    }
  },

  actions: { //可以通过接口请求等，异步调用mutations的方法
    addCount(context){ //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('increment')
          resolve()
        }, 1000);
      })
    },
    setCount({state, commit, rootState },count){ //对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
      commit('changeCount',count)
    }
  },

  getters: {
    getCount: (state,getters,rootState) => state.count, //对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
    todoList: state => state.todoList,
    doneTodos: state => {
      return state.todoList.filter(todo => todo.done)
    },
    undoneTodos: state => {
      return state.todoList.filter(todo => !todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todoList.filter(todo => todo.id === id)
    }
  }
}

export default data

