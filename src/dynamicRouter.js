import router from '@/router'
import dynamic from '@/router/dynamic.js'

let count = parseInt(Math.random()*4) + 1

dynamic.length = count

console.log('处理后的动态路由',dynamic)

router.addRoutes(dynamic)

