<template>
  <div id="app">
    <div class="slider-box">
      <demo-slider :applyval="applyDemo"></demo-slider>
    </div>
    <div class="main-area" :style="{backgroundImage: colorVal}">
      <div class="color-wraper">
        <color-slider :stops="colordata.stops"></color-slider>
      </div>
      <angress :option="anoption" v-model="colordata.deg" :valtime="angressTime"></angress>
      <button @click="randomColor" class="random-btn" title="随机渐变色">
        <icon name="random"></icon>
      </button>
      <div class="code-box">
        <code>background-image: {{colorVal}}</code>
      </div>
      <div class="footer">
        Powered by <a href="https://www.awesomes.cn/" target="_blank">Awesomes.cn</a> Open on <a href="https://github.com/awesomes-cn/gradient" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
  import angress from './components/angress.vue'
  import ColorSlider from './components/color-slider.vue'
  import DemoSlider from './components/demo-slider.vue'
  export default {
    data () {
      return {
        colordata: {
          deg: 36,
          stops: [
            {
              color: '#17522E',
              per: 0
            },
            {
              color: '#2893A2',
              per: 60
            },
            {
              color: '#FFCB16',
              per: 100
            }
          ]
        },
        angressTime: Date.now(),
        anoption: {
          size: 220,
          activeColor: '#FFEB3B',
          fontSize: '30px',
          lineLenth: 45,
          fontFormat: function (val) {
            return `${val}°`
          }
        }
      }
    },
    components: {
      angress,
      ColorSlider,
      DemoSlider
    },
    methods: {
      insertStop: function (item) {
        this.colordata.stops.push(item)
      },
      applyDemo: function (color) {
        if (!color) { return }
        this.colordata = color
        this.angressTime = Date.now()
      },
      randomColor: function () {
        let color1 = this.getRandomColor()
        let color2 = this.getRandomColor()
        let _deg = parseInt(Math.random() * 360)
        this.colordata = {
          deg: _deg,
          stops: [
            {
              color: color1,
              per: 0
            },
            {
              color: color2,
              per: 100
            }
          ]
        }
        this.angressTime = Date.now()
      },
      // 随机颜色
      getRandomColor: function () {
        return '#' + ('00000' + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6)
      }
    },
    computed: {
      colorVal: function () {
        let stops = this.colordata.stops.map(item => {
          return `${item.color} ${item.per}%`
        }).join(', ')
        return `linear-gradient(${this.colordata.deg}deg, ${stops})`
      }
    }
  }
</script>

<style>
  html,body {
    margin: 0;
    padding: 0; 
    color: #555;
    font-size: 14px;
    height: 100%;
  }

  .hidescroll {
    height: 0;
    overflow: hidden
  }

  * {
    font-family: Menlo, Monaco, Consolas, "Helvetica Neue", Helvetica, "Courier New", 微软雅黑, monospace, Arial, sans-serif, 黑体;
    // transition: all,.5s;
  }

  .slide-enter-active,  .slide-leave-active {
    transition: all .3s ease;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(400px)
  }

  .container {
    margin: 50px auto;
    max-width: 1000px;
  }

  .pagination {
    text-align: center
  }

  .page-btn {
    display: inline-block;
    background-color: #FFF;
    padding: 10px 50px;
    box-shadow: 1px 1px 15px #EEE;
  }

  .side-right .page-btn {
    left: 10px;
  }

  .page-btn svg {
    width: 50px;
    height: 50px;
  }

  .page-btn:link svg, .page-btn:visited svg{
    fill: #dad5d5
  }

  [v-show], ['v-cloak'] {
    display: none
  }

  a, svg {
    transition: all,.5s,ease,0s;
    -webkit-transition: all,.5s,ease,0s;
    text-decoration: none
  }

  a:link, a:visited {
    color: #999;
  }

  a:link svg, a:visited svg {
    fill: #999; 
  }

  a:active, a:hover {
    color: #f34e5c;
  }

  a:active svg, a:hover svg{
    fill: #f34e5c;
  }

  .icon {
    width: 20px;
    height: 20px;
    display: inline-block;
    fill: #000;
  }

  .loading-box {
    display: flex;
    width: 100%;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  #app {
    height: 100%;
  }

  .main-area {
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column
  }
  
  .main-area canvas, .main-area .color-wraper, .slider-box, .random-btn {
    opacity: .6;
    transition: all .5s
  }

  .main-area canvas:hover {
    opacity: 1;
  }

  .main-area .color-wraper:hover {
    opacity: 1;
  }

  .slider-box:hover {
    opacity: 1;
  }

  .random-btn:hover {
    opacity: 1;
  }

  .load-outer {
    width: 100%;
    display: flex;
    flex-wrap:  wrap;
    padding: 50px 0;
    justify-content: space-between;
  }

  .form-item {
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
  }

  .form-item .input-name {
    width: 100px;
  }

  .form-item .form-txt {
    border: #DDD 1px solid;
    padding: 8px 10px;
    outline: none;
    display: block;
    flex-grow: 1;
    border-color: #d2d6de;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
  }

  .svg-icon {
    width: 20px;
    height: 20px;
  }

  .code-panel {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 400px;
    background-color: #FFF;
    box-shadow: 1px 1px 15px #EEE;
    border-left: #ebebeb 1px solid;
    opacity: 0.9;
    z-index: 50;
  }

  .code-panel .inner {
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }

  .code-panel textarea {
    resize: none;
    width: 100%;
    height: 100%;
    position: absolute;
    line-height: 22px;
    letter-spacing: 1px;
    padding: 0 10px;
  }

  .code-panel .area-html {
    height: 150px;
    position: relative
  }

  .code-panel .area-css {
    flex-grow: 1;
    position: relative
  }

  .code-panel .close-code-btn {
    position: fixed;
    top: 20px;
    right: 20px; 
  }

  .banner {
    text-align: center;
    background-color: #f9d732;
    padding: 50px;
  }

  .banner h1 {
    margin: 0;
  }
  .nav {
    background-color: #000;
    padding: 20px;
    text-align: center;
    color: #FFF;
  }

  .footer {
    text-align: center;
    line-height: 50px;
    color: #DDD;
    text-align: center;
  }

  .footer a {
    color: #DDD;
    font-weight: bold;
    text-decoration: underline
  }

  .ang-box {
    width: 250px;
    height: 250px;
    margin: 100px auto;
  }

  .color-wraper {
    width: 900px;
    padding: 0 100px;
    padding-top: 100px;
    height: 200px;
    box-sizing: border-box;
  }

  .slider-box {
    width: 150px;
    position: fixed;
    right: 20px;
    z-index: 50;
  }

  .code-box {
    text-align: center;
    color: #FFF;
    font-size: 15px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
  }

  .code-box code {
    background-color: rgba(255, 255, 255, 0.2);
    display: inline-block;
    padding: 20px;
    border-radius: 5px;
    letter-spacing: 0.2px;
    border-left: 3px solid #fff;
  }

  .random-btn {
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.71);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #E91E63;
    margin: 20px 0;
    border: none;
    outline: none;
  }

  .footer {
    height: 50px;
  }
</style>
