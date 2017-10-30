<template>
  <div class="swiper-outer">
    <!-- Swiper -->
    <div class="swiper-container" :style="{height: slideHeight + 'px', marginTop: top + 'px'}">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="color in colors" :style="{backgroundImage: colorVal(color)}" @click="applyval(color)"></div>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  require('swiper/dist/css/swiper.css')
  import Swiper from 'swiper'
  const deg = 135
  export default {
    props: ['applyval'],
    data () {
      return {
        slideHeight: 0,
        top: 0,
        colors: [
          {
            deg: deg,
            stops: [
              {
                color: '#A8E6CF',
                per: 0
              },
              {
                color: '#FFD3B6',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#DEFCF9',
                per: 0
              },
              {
                color: '#C3BEF0',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FFFE9F',
                per: 0
              },
              {
                color: '#FCA180',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#30E3CA',
                per: 0
              },
              {
                color: '#11999E',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#E7F0D2',
                per: 0
              },
              {
                color: '#ABCB89',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#ABDCFF',
                per: 0
              },
              {
                color: '#0396FF',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FEB692',
                per: 0
              },
              {
                color: '#EA5455',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#CE9FFC',
                per: 0
              },
              {
                color: '#7367F0',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#90F7EC',
                per: 0
              },
              {
                color: '#32CCBC',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FFF6B7',
                per: 0
              },
              {
                color: '#F6416C',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#81FBB8',
                per: 0
              },
              {
                color: '#28C76F',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#E2B0FF',
                per: 0
              },
              {
                color: '#9F44D3',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#F97794',
                per: 0
              },
              {
                color: '#623AA2',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#F761A1',
                per: 0
              },
              {
                color: '#8C1BAB',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#43CBFF',
                per: 0
              },
              {
                color: '#9708CC',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#5EFCE8',
                per: 0
              },
              {
                color: '#736EFE',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FAD7A1',
                per: 0
              },
              {
                color: '#E96D71',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FFD26F',
                per: 0
              },
              {
                color: '#3677FF',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#A0FE65',
                per: 0
              },
              {
                color: '#FA016D',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FFDB01',
                per: 0
              },
              {
                color: '#0E197D',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FEC163',
                per: 0
              },
              {
                color: '#DE4313',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#92FFC0',
                per: 0
              },
              {
                color: '#002661',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#EEAD92',
                per: 0
              },
              {
                color: '#6018DC',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#F6CEEC',
                per: 0
              },
              {
                color: '#D939CD',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#52E5E7',
                per: 0
              },
              {
                color: '#130CB7',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#F1CA74',
                per: 0
              },
              {
                color: '#A64DB6',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#E8D07A',
                per: 0
              },
              {
                color: '#5312D6',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#EECE13',
                per: 0
              },
              {
                color: '#B210FF',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#79F1A4',
                per: 0
              },
              {
                color: '#0E5CAD',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FDD819',
                per: 0
              },
              {
                color: '#E80505',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FFF3B0',
                per: 0
              },
              {
                color: '#CA26FF',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#FFF5C3',
                per: 0
              },
              {
                color: '#9452A5',
                per: 100
              }
            ]
          },
          {
            deg: deg,
            stops: [
              {
                color: '#F05F57',
                per: 0
              },
              {
                color: '#360940',
                per: 100
              }
            ]
          }
        ]
      }
    },
    components: {
    },
    watch: {
    },
    methods: {
      colorVal: function (color) {
        let stops = color.stops.map(item => {
          return `${item.color} ${item.per}%`
        }).join(', ')
        return `linear-gradient(${color.deg}deg, ${stops})`
      }
    },
    mounted () {
      let screenHeight = document.body.clientHeight
      let _top = parseInt(screenHeight * 0.1)
      this.top = _top
      this.slideHeight = screenHeight - _top * 2
      setTimeout(function () {
        new Swiper('.swiper-container', {
          direction: 'vertical',
          slidesPerView: 6,
          spaceBetween: 10,
          slidesPerGroup: 6,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          mousewheel: true
        })
      }, 0)
    }
  }
</script>

<style>
  .swiper-container {
    width: 100px;
  }
  .swiper-slide {
    border: #FFF 5px solid;
    box-sizing: border-box;
    box-shadow: 1px 1px 15px #cccccc;
  }
  .swiper-pagination {
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    bottom: 0;
  }
  .swiper-pagination-bullet {
    margin-top: 5px;
  }
</style>
