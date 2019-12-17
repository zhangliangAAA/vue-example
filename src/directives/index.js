import Vue from 'vue'
import {
  Message
} from 'element-ui'
/**
 * @description 验证码发送倒计时插件
 * @param { callback:点击后的回调方法，seconds：时间，默认60 }
 * @example v-countdown="{callback:getPhoneCode, seconds: 80}"
 */
Vue.directive('countdown', {
  bind(el, binding, vnode) {
    const clickEvent = binding.value.callback
    const totalSeconds = binding.value.seconds || 60
    const initText = el.innerText
    let isCountDowning = false
    
    function countDownFun(el, leftSec, initText) {
      el.innerHTML = leftSec + 's'
      if (leftSec > 0) {
        // el.style.color = '#ccc';
        // el.style.border = '1px solid #ccc';
        // el.style.cursor = 'default';
        // el.style.background = '#fff';
        // el.onmousemove = function() {
        //   el.style.background = '#fff';
        // };
        leftSec -= 1
        setTimeout(() => {
          countDownFun(el, leftSec, initText)
        }, 1000)
      } else {
        // el.style.color = '#ff553f';
        // el.style.border = '1px solid #ff553f';
        // el.style.cursor = 'pointer';
        // el.onmouseover = function() {
        //   el.style.background = 'rgba(255, 85, 63, 0.1)';
        // };
        el.innerHTML = initText || '重新发送'
        isCountDowning = false
        return
      }
    }
    el.addEventListener('click', function(event) {
      if (!isCountDowning) {
        const clickPromise = clickEvent()
        if (Object.prototype.toString.call(clickPromise) === '[object Promise]') {
          isCountDowning = true
          clickPromise.then(() => {
            countDownFun(el, totalSeconds, initText)
          }, () => {
            isCountDowning = false
          })
        } else {
          isCountDowning = true
          countDownFun(el, totalSeconds, initText)
        }
      }else{
        console.log('点击无效！')
      }
    })
  },
  unbind() {
    console.log('I am unbinding DOM--------------------------------')
  }
})

/**
 * @description click download
 * @author thomas
 * @example v-download="{name: '图片名', url: 'http://...'}"
 */

function downloadFile(event) {
  const currentTarget = event.currentTarget
  const fileName = currentTarget.getAttribute('fileName')
  const fileUrl = currentTarget.getAttribute('fileUrl')
  console.log(fileUrl)
  if (fileUrl && typeof fileUrl === 'string') {
    const urlArr = fileUrl.split('/')
    const fileArr = urlArr[urlArr.length - 1].split('.')
    const fileType = fileArr[fileArr.length - 1]
    const urlFileName = fileArr[0]
    console.log(fileType)
    if (fileType === 'jpg' || fileType === 'jpeg' || fileType === 'png' || fileType === 'svg' || fileType === 'gif') {
      // 创建image对象
      const imgObj = new Image()
      // 待图片加载完后，将其显示在canvas上
      imgObj.setAttribute('crossOrigin', 'anonymous')
      imgObj.src = fileUrl
      imgObj.onload = function() {
        // 创建canvas元素
        const canvas = document.createElement('canvas')
        canvas.width = this.width
        canvas.height = this.height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(this, 0, 0, this.width, this.height)
        // 使用toDataURL方法将图像转换被base64编码的URL字符串
        const returnType = fileType === 'png' ? 'png' : 'jpeg'
        const url = canvas.toDataURL('image/' + returnType)
        // 生成一个a元素
        const a = document.createElement('a')
        // 创建一个单击事件
        const e = new MouseEvent('click')
        // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
        a.download = fileName || urlFileName
        // 将生成的URL设置为a.href属性
        a.href = url
        // 触发a的单击事件
        a.dispatchEvent(e)
      }
    } else {
      window.open(fileUrl, '_blank')
    }
  } else {
    Message({
      message: 'url格式错误',
      type: 'error',
      duration: 4000
    })
  }
}

Vue.directive('download', {
  bind(el, binding, vnode) {
    console.log(binding.value, 'bind')
    if (binding.value && Object.prototype.toString.call(binding.value) === '[object Object]') {
      el.setAttribute('fileName', binding.value.name)
      el.setAttribute('fileUrl', binding.value.url)
      el.addEventListener('click', downloadFile)
    } else {
      console.error('参数格式错误')
    }
  },
  inserted(el, binding, vnode) {
    // console.log(binding.name, binding.value, 'inserted')
  },
  update(el, binding, vnode) {
    // console.log(binding.name, binding.value, 'update')
    el.removeEventListener('click', downloadFile)
    if (binding.value && Object.prototype.toString.call(binding.value) === '[object Object]') {
      el.setAttribute('fileName', binding.value.name)
      el.setAttribute('fileUrl', binding.value.url)
      el.addEventListener('click', downloadFile)
    } else {
      console.error('参数格式错误')
    }
  },
  componentUpdated(el, binding, vnode) {
    // console.log(binding.name, binding.value, 'componentUpdated')
    // el.addEventListener('click', downloadFile)
  },
  unbind(el, binding, vnode) {
    el.removeEventListener('click', downloadFile)
  }
})
