<template>
  <div class="image-edit">
    <div
      v-show="checkUrl"
      class="edit-content"
    >
      <div class="select-content">
        <button @click="clearCanvas">重新编辑</button>
        <!-- <radio-group
          v-model="radioStatus"
          @change="radioChange"
        >
        
          <radio-button label="write">T</radio-button>
        </radio-group> -->
        <span>
          <input type="radio" @change="radioChange('scrawl')" id="scrawl" :checked="radioStatus === 'scrawl'" name="radioStatus" value="scrawl"/>
          <label for="scrawl">标记</label>
        </span>
        <span>
          <input type="radio" @change="radioChange('write')" id="write" :checked="radioStatus === 'write'" name="radioStatus" value="write"/>
          <label for="write">文本</label>
        </span>
        <select
          v-model="color"
          style="width:100px"
          placeholder="请选择颜色"
        >
          <option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </select>
        <button @click="saveImg">保存</button>
      </div>
      <div
        :style="{width: canvasWidth + 4 + 'px'}"
        class="canvas-content"
      >
        <canvas
          ref="myCanvas"
          :width="canvasWidth+'px'"
          :height="canvasHeight+'px'"
          style="border:1px solid #c3c3c3;"
        >
          你的浏览器暂不支持此功能，请升级！
        </canvas>
        <div 
          v-show="showTxt"
          :style="{top,left}"
          class="txt"
        >
          <input
            v-model="inputTxt"
          />
          <button @click="addTxt">
            确定
          </button>
        </div>
      </div>
    </div>
    <div
      v-show="!checkUrl"
      :style="{width:canvasWidth+'px',height:canvasHeight+'px',lineHeight:canvasHeight+'px'}"
      class="error-content"
    >
      {{ (!checkUrl ? '请选择正确的图片地址！' : '')}}
    </div>
  </div>

</template>

<script>

const imgReg = /\.(png|jpg|jpeg|gif|svg|bmp)$/i

/**
 * 配置参数说明：
 * canvasSize，canvas大小
 * imageUrl : 要编辑的图片
 * function editedBase64Url : 图片编辑后传出的格式为base64的url
 * */
export default {
  props: {
    canvasSize: {
      type: Object,
      default() {
        return {
          canvasWidth: 600,
          canvasHeight: 600
        }
      }
    },
    imageUrl: {
      type: String,
      default: 'http://test-oyo-common-file-r.oss-cn-beijing.aliyuncs.com/permanent/supplier/258/PTIImage/20190213111441763518.jpg'
    },
  },
  data() {
    return {
      radioStatus: 'scrawl',
      showTxt: false,
      inputTxt: '',
      top: 0,
      left: 0,
      offsetY: 0,
      offsetX: 0,
      color: 'black',
      options: [{
        value: 'black',
        label: '黑色'
      }, {

        value: 'red',
        label: '红色'
      }, {
        value: 'blue',
        label: '蓝色'
      }, {
        value: 'yellow',
        label: '黄色'
      }, {
        value: 'green',
        label: '绿色'
      }
      ],
      canvasWidth: this.canvasSize.canvasWidth || 600,
      canvasHeight: this.canvasSize.canvasHeight || 600,
      newUrl: ''
    }
  },
  computed: {
    checkUrl() {
      return imgReg.test(this.imageUrl)
    }
  },
  watch: {
    imageUrl: function(newValue) {
      if (newValue) {
        this.clearCanvas()
        this.scrawl()
      }
    }
  },
  mounted() {
    if (this.checkUrl) {
      this.drawImg(this.imageUrl)
      this.scrawl()
    }
  },
  methods: {
    // draw() {
    //   var ctx = this.$refs['myCanvas'].getContext('2d')
    //   ctx.strokeStyle = 'red'
    //   ctx.beginPath()
    //   ctx.moveTo(50, 500)
    //   ctx.lineTo(200, 600)
    //   ctx.stroke()

    //   // ctx.fillStyle = 'rgb(200,0,0)'
    //   // ctx.fillRect(10, 10, 50, 50) // 绘制一个填充的矩形

    //   // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    //   // ctx.fillRect(35, 35, 50, 50)

    //   // ctx.fillStyle = 'rgb(0, 100, 200)'
    //   // ctx.strokeRect(100, 10, 50, 50) // 绘制一个矩形的边框

    //   // ctx.clearRect(35, 35, 25, 25) // 清除指定矩形区域，让清除部分完全透明。

    //   /**
    //    * 使用路径绘制图
    //    * beginPath() 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
    //    * closePath() 闭合路径之后图形绘制命令又重新指向到上下文中。
    //    * stroke() 通过线条来绘制图形轮廓。
    //    * fill() 通过填充路径的内容区域生成实心的图形
    //   */

    //   // ctx.beginPath()
    //   // ctx.moveTo(75, 50)
    //   // ctx.lineTo(100, 75)
    //   // ctx.lineTo(100, 25)
    //   // ctx.fill()

    //   // ctx.beginPath()
    //   // ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
    //   // ctx.moveTo(110, 75)
    //   // ctx.arc(75, 75, 35, 0, Math.PI, false) // 口(顺时针)
    //   // ctx.moveTo(65, 65)
    //   // ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
    //   // ctx.moveTo(95, 65)
    //   // ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
    //   // ctx.stroke()

    //   ctx.fillStyle = 'orange'
    //   ctx.strokeStyle = 'red'
    //   // 填充三角形
    //   ctx.beginPath()
    //   ctx.moveTo(25, 25)
    //   ctx.lineTo(105, 25)
    //   ctx.lineTo(25, 105)
    //   ctx.fill()

    //   // 描边三角形
    //   ctx.beginPath()
    //   ctx.moveTo(125, 125)
    //   ctx.lineTo(125, 45)
    //   ctx.lineTo(45, 125)
    //   ctx.closePath()
    //   ctx.stroke()

    //   // 画圆
    //   ctx.moveTo(200, 200)
    //   ctx.arc(200, 200, 50, 0, Math.PI / 2)
    //   ctx.stroke()

    //   ctx.strokeStyle = 'blue'
    //   // 矩形
    //   ctx.rect(500, 50, 50, 50)
    //   ctx.stroke()

    //   ctx.font = '48px serif'
    //   ctx.fillText('Hello world', 10, 50)
    // },
    drawImg(url) { // 将image绘制在canvas上
      const canvas = this.$refs['myCanvas']
      var ctx = canvas.getContext('2d')
      var img = new Image()
      img.crossOrigin = 'Anonymous'
      // img.setAttribute('crossOrigin', 'anonymous') // 设置资源跨域，在导出的时候用到
      img.onload = () => {
        const height = this.canvasWidth * img.height / img.width
        if (height <= this.canvasHeight) {
          ctx.drawImage(img, 0, (this.canvasHeight - height) / 2, this.canvasWidth, height)
        } else {
          const width = this.canvasHeight * img.width / img.height
          ctx.drawImage(img, (this.canvasWidth - width) / 2, 0, width, this.canvasHeight)
        }
      }
      img.src = url
    },
    saveImg() {
      const canvas = this.$refs['myCanvas']
      var url = canvas.toDataURL() // 获取到该canvas对象中所包含图片编码后的data: URL字符串. base64
      
      this.$emit('editedBase64Url', url)
      canvas.toBlob((blob) => { // 返回一个Blob对象,表示了包含在该canvas中的图片文件,这个文件可能缓存在硬盘上,也可能存储在内存中,这由浏览器决定.如果没有指定type参数,则默认使用image/png.
        const newUrl = URL.createObjectURL(blob)
        this.$emit('newUrl', newUrl)
      })
    },

      // request({
      //   url: url,
      //   method: 'post',
      //   data: formdata,
      //   headers: { 'Content-Type': 'multipart/form-data' }
      // }).then(({ data }) => {
      //   // const { fileId, filePath } = data
      //   // Object.assign(this.auditInfo, { fileId, filePath })
      //   console.log('上传成功啦', data)
      // }).catch((err) => {
      //   console.log('err :', err)
      // })
    asyncdataURLtoFile(dataurl, filename) { // base64转file
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },

    clearCanvas() { // 清空涂鸦和文字
      const canvas = this.$refs['myCanvas']
      let width = canvas.width
      canvas.width = width // 改变宽度即可清空已绘制的内容
      this.drawImg(this.imageUrl)
      this.showTxt = false // 隐藏输入框
    },
    radioChange(val) {
      this.radioStatus = val
      if (val === 'scrawl') {
        this.scrawl()
      } else {
        this.write()
      }
    },
    scrawl() { // 涂鸦
      const self = this
      self.showTxt = false
      const canvas = this.$refs['myCanvas']
      const ctx = canvas.getContext('2d')
      canvas.onmousedown = function(ev) {
        var event = ev || window.event
        // 选用笔触颜色
        ctx.strokeStyle = self.color
        ctx.beginPath()
        // 起始位置
        ctx.moveTo(event.offsetX, event.offsetY)

        document.onmousemove = function(ev) {
          var event2 = ev || window.event
          // 移动位置
          ctx.lineTo(event2.offsetX, event2.offsetY)
          ctx.stroke()
        }
        document.onmouseup = function() {
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    },
    write() { // 写字
      const self = this
      const canvas = this.$refs['myCanvas']
      canvas.onmousedown = function(ev) {
        var event = ev || window.event
        self.offsetY = event.offsetY
        self.top = (event.offsetY - 32) + 'px' // 坐标点高度减去input框的高度，作为插入字体的位置
        self.offsetX = event.offsetX
        self.left = event.offsetX + 'px'
        self.showTxt = true
        document.onmouseup = function() {
          document.onmouseup = null
        }
      }
    },
    addTxt() { // 绘制文字
      this.showTxt = false
      const canvas = this.$refs['myCanvas']
      const ctx = canvas.getContext('2d')
      // 选用笔触颜色
      // ctx.strokeStyle = this.color
      ctx.fillStyle = this.color
      ctx.beginPath()
      // 起始位置
      ctx.moveTo(this.offsetX, this.offsetY)
      ctx.font = '20px serif' // 设置字体大小和样式
      ctx.fillText(this.inputTxt, this.offsetX, this.offsetY)
      this.offsetY = this.offsetX = 0
      this.inputTxt = ''
    }
  }
}
</script>



<style>
.image-edit {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
}
.image-edit .select-content {
  text-align: center;
  margin-bottom: 8px;
}
.image-edit .canvas-content {
  position: relative;
  margin: 0 auto;
}
.image-edit .canvas-content .txt {
  position: absolute;
  width: auto;
}
.image-edit .error-content {
  text-align: center;
  margin: 0 auto;
}
</style>
