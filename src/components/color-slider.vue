<template>
  <div class="color-box" id="color-box">
    <div class="slider-bar" @click="addStop($event)"></div>
    <div class="color-item" v-for="item in stops" :style="{left: (perToNumber(item.per) - 15) + 'px', backgroundColor: item.color}" @mousedown.stop="checkColor(item, $event)">
      <div class="color-txt">
        {{item.per}}
      </div>
    </div>
  </div>
</template>

<script>
  let mouseX, oldPer
  var checkedItem = null
  export default {
    props: ['stops'],
    methods: {
      move: function (event) {
        if (checkedItem) {
          let _per = oldPer + this.numberToPer(event.pageX - mouseX)
          if (_per < 0) {
            _per = 0
          }
          if (_per > 100) {
            _per = 100
          }
          checkedItem.per = parseInt(_per)
        }
      },
      perToNumber: function (percent) {
        return percent * 700 * 1.00 / 100
      },
      numberToPer: function (num) {
        return parseInt(num * 1.00 / 700 * 100)
      },
      checkColor: function (item, event) {
        checkedItem = item
        oldPer = item.per
        mouseX = event.pageX
      },
      addStop: function (event) {
        let _per = this.numberToPer(event.offsetX)
        let _item = {
          color: 'red',
          per: _per
        }
        var index = this.stops.filter(item => {
          return item.per < _per
        }).length
        this.stops.splice(index, 0, _item)
        // this.$emit('insert', _item)
      }
    },
    mounted () {
      let _self = this
      let wrap = document.body
      wrap.addEventListener('mousemove', _self.move)
      wrap.addEventListener('mouseup', function (event) {
        checkedItem = null
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
    height: 30px;
    border-radius: 100%;
    background-color: #c52424;
    border: #FFF 5px solid;
    position: absolute;
    box-shadow: 0px 0px 5px #b8b2b2;
    // cursor: move;
    left: 0;
    top: 0;
  }
  .color-txt {
    position: absolute;
    top: -40px;
    background-color: #FFF;
    padding: 5px 0px;
    -webkit-box-shadow: 0px 0px 5px #7b7b7b;
    box-shadow: 0px 0px 5px #7b7b7b;
    border-radius: 3px;
    width: 34px;
    text-align: center;
    left: -7px;
  }
</style>
