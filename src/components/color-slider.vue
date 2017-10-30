<template>
  <div :class="'color-box active-' + isMouseDown" >
    <div class="slider-bar" @click="addStop($event)"  title="插入节点" ></div>
    <div class="color-item" v-for="item in stops" :style="{left: (perToNumber(item.per) - 15) + 'px'}">
      <div class="color-circle" title="单击换颜色" :style="{backgroundColor: item.color}" @click.stop=""  @mouseup.stop="showColor($event, item)" @mousedown.stop="checkColor(item, $event)"></div>
      <div class="color-per">
        {{item.per}}%
      </div>
      <div class="color-pop" v-if="item == showItemColor" @click.stop="">
        <chrome-picker :value="{hex: item.color}" @input="updateValue"></chrome-picker>
      </div>
      <div class="color-txt">
        {{item.color}}
      </div>
      <span href="javascript:void(0)" class="color-trash" @click="removeStop(item)" title="移除节点">
        <icon name="trash"></icon>
      </span>
    </div>
  </div>
</template>

<script>
  let mouseX, oldPer, mousedownTime
  import { Chrome } from 'vue-color'
  export default {
    props: ['stops'],
    data () {
      return {
        test: false,
        showItemColor: null,
        checkedItem: null,
        isMouseDown: false
      }
    },
    methods: {
      // 移动滑块
      move: function (event) {
        if (!this.checkedItem) { return }
        this.isMouseDown = true
        let offset = event.pageX - mouseX
        if (offset === 0) {
          this.isMouseDown = false
        }
        let _per = oldPer + this.numberToPer(offset)
        if (_per < 0) {
          _per = 0
        }
        if (_per > 100) {
          _per = 100
        }
        this.checkedItem.per = parseInt(_per)
      },

      // 百分比转为数字
      perToNumber: function (percent) {
        return percent * 700 * 1.00 / 100
      },

      // 数字转为百分比
      numberToPer: function (num) {
        return parseInt(num * 1.00 / 700 * 100)
      },

      // 鼠标按下在颜色节点
      checkColor: function (item, event) {
        this.checkedItem = item
        oldPer = item.per
        mouseX = event.pageX
        mousedownTime = Date.now()
      },

      // 添加节点
      addStop: function (event) {
        let _per = this.numberToPer(event.offsetX)
        let _item = {
          color: '#134B54',
          per: _per
        }
        var index = this.stops.filter(item => {
          return item.per < _per
        }).length
        this.stops.splice(index, 0, _item)
      },

      // 移除节点
      removeStop: function (item) {
        var index = this.stops.indexOf(item)
        this.stops.splice(index, 1)
      },

      // 显示颜色选择器
      showColor: function (event, item) {
        if (event.pageX - mouseX === 0 && (Date.now() - mousedownTime) < 2000) {
          this.showItemColor = item
        }
        this.checkedItem = null
        this.isMouseDown = false
      },

      // 更新颜色值
      updateValue: function (value) {
        this.showItemColor.color = value.hex
      }
    },
    components: {
      'chrome-picker': Chrome
    },
    mounted () {
      let _self = this
      let wrap = document.body
      wrap.addEventListener('mousemove', _self.move)
      wrap.addEventListener('mouseup', function (event) {
        _self.checkedItem = null
        _self.isMouseDown = false
      })
      wrap.addEventListener('click', function () {
        _self.showItemColor = null
      })
    }
  }
</script>

<style scoped>
  .color-box {
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
  }
  .color-box.active-true * {
    user-select: none;
  }
  .slider-bar {
    width: 100%;
    height: 5px;
    background-color: #FFF;
    border-radius: 100px;
    cursor: crosshair;
  }

  .color-item {
    box-sizing: border-box;
    width: 30px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .color-item:hover .color-trash {
    display: inline-block;
  }
  .color-circle {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    box-shadow: 0px 0px 5px #b8b2b2;
    box-sizing: border-box;
    border: #FFF 5px solid;
  }
  .color-per {
    position: absolute;
    top: -40px;
    background-color: #FFF;
    padding: 5px 0px;
    -webkit-box-shadow: 0px 0px 5px #7b7b7b;
    box-shadow: 0px 0px 5px #7b7b7b;
    border-radius: 3px;
    width: 40px;
    text-align: center;
    left: -7px;
  }
  .color-per:before{
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #FFF;
    content: '';
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 10px;
  }
  .color-txt {
    position: absolute;
    top: 40px;
    text-align: center;
    color: #FFF;
    width: 60px;
    left: -10px;
  }
  .color-pop {
    position: absolute;
    top: 40px;
    left: -90px;
    z-index: 10;
  }

  .color-trash {
    position: absolute;
    top: 60px;
    left: 5px;
    color: #EEE;
    cursor: pointer;
    display: none;
  }
</style>
