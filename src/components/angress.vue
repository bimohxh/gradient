<template>
  <div>
    <canvas :id="flag" :width="canoption.size" :height="canoption.size"></canvas>
  </div>
</template>

<script>
  var canvi, ctx
  export default {
    props: ['value', 'option', 'id', 'valtime'],
    data () {
      return {
        flag: 'anglecan',
        canoption: {
          size: 300, // canvas 长宽
          fontSize: '48px', // 文字字体
          fontColor: '#FFF', // 颜色
          fontFormat: (number) => {
            return number
          }, // 文字格式化
          max: 360, // 最大值
          splice: 180, // 等分数，
          lineLenth: 50, // 线条长度
          lineWidth: 1, // 线条宽度
          defaultColor: '#FFF', // 线条默认色
          activeColor: 'red' // 线条激活颜色
        }
      }
    },
    methods: {
      draw: function (val, isFirst) {
        this.$emit('input', val)
        let _translate = this.canoption.size / 2
        ctx.clearRect(-_translate, -_translate, canvi.width, canvi.height)
        // ctx.font = this.canoption.fontSize
        if (!isFirst) {
          ctx.rotate(Math.PI)
        }
        ctx.font = `${this.canoption.fontSize} sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = this.canoption.fontColor
        let txt = this.canoption.fontFormat(val)
        ctx.fillText(txt, 0, 0)
        if (isFirst) {
          ctx.rotate(Math.PI)
        }
        ctx.beginPath()
        let _self = this
        for (var i = 0; i <= 180; i++) {
          ctx.restore()
          ctx.save()
          if (i > val / this.canoption.max * 180) {
            ctx.fillStyle = _self.canoption.defaultColor
          } else {
            ctx.fillStyle = _self.canoption.activeColor
          }
          if (i > 0) {
            ctx.rotate(Math.PI * 2 / 180 * i)
          }
          ctx.fillRect(0, _translate - this.canoption.lineLenth, this.canoption.lineWidth, this.canoption.lineLenth)
        }
      },
      move: function (event) {
        let x = event.pageX - canvi.getBoundingClientRect().left
        let y = event.pageY - canvi.getBoundingClientRect().top
        let deg = 0
        let canw = this.canoption.size
        let _r = canw / 2
        let _w = x - _r
        let _h = _r - y
        deg = Math.atan(_w / _h)
        if (y > _r) {
          _h = y - _r
          deg = Math.PI - Math.atan(_w / _h)
        }
        if (x < _r && y < _r) {
          _w = _r - x
          _h = _r - y
          deg = Math.PI * 2 - Math.atan(_w / _h)
        }
        this.draw(parseInt(deg * 180 / Math.PI))
      }
    },
    watch: {
      'valtime': function () {
        this.draw(this.value)
      }
    },
    created () {
      let _self = this
      let _option = _self.option || {}
      for (let key in this.canoption) {
        if (_option[key]) {
          _self.canoption[key] = _option[key]
        }
      }
    },
    mounted () {
      canvi = document.getElementById(this.flag)
      ctx = canvi.getContext('2d')
      ctx.translate(this.canoption.size / 2, this.canoption.size / 2)
      this.draw(this.value, true)
      let _self = this
      canvi.addEventListener('mousedown', function (event) {
        _self.move(event)
        canvi.addEventListener('mousemove', _self.move)
      })
      canvi.addEventListener('mouseup', function (event) {
        canvi.removeEventListener('mousemove', _self.move)
      })
    }
  }
</script>

<style>
</style>
