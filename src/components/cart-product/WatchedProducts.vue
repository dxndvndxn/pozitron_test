<template>
  <div class="watched-prds">
      <div class="watched-prds__head">
          <h1 class="watched-prds__head-title">Просмотренные товары</h1>

          <div class="watched-prds__head-btns">
              <button class="watched-prds__head-btn" @click="moveBack"> <img src="../../assets/carousel_prev.svg"> </button>
              <div class="watched-prds__head-points">
                  <span class="watched-prds__head-mainpoint">{{ clickSlide }}</span>
                  <span class="watched-prds__head-relatepoint"> /{{getWatchedProducts.length}}</span>
              </div>
              <button class="watched-prds__head-btn" @click="moveNext"> <img src="../../assets/carousel_next.svg"> </button>
          </div>
      </div>
      <VueSlickCarousel v-bind="settings" ref="myCarousel">
          <div class="watched-prds__item" v-for="(item, i) in getWatchedProducts" :key=i>
              <div class="watched-prds__item-img">
                  <img :src="require(`@/assets/${item.watchedProdImg}`)" alt="">
              </div>
              <div class="watched-prds__item-title">
                  {{ item.watchedProdTitle }}
              </div>
              <div class="watched-prds__item-desc">
                  {{ item.watchedProdDesc }}
              </div>
              <div class="watched-prds__item-priceR">
                  {{ item.watchedProdPriceR[0] }} ₽ - {{ item.watchedProdPriceR[1] }} ₽
              </div>
              <div class="watched-prds__item-priceE">
                  {{ item.watchedProdPriceE[0] }} € - {{ item.watchedProdPriceE[1] }} €
              </div>
              <button class="watched-prds__item-btn btn_blu">Подробнее</button>
          </div>
      </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
     settings: {
            "infinite": true,
            "initialSlide": 2,
            "speed": 500,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "swipeToSlide": true,
            "arrows": false,
     },
     clickSlide: 1 
  }),  
  components: { VueSlickCarousel },
  created(){
      this.$store.dispatch('watchedProducts')
  },
  methods: {
      moveBack(){
          this.clickSlide === 1 ? this.clickSlide = this.getWatchedProducts.length : this.clickSlide--
          this.$refs.myCarousel.prev()
      },
      moveNext(){
          this.clickSlide === this.getWatchedProducts.length ? this.clickSlide = 1 : this.clickSlide++
          this.$refs.myCarousel.next()
      }
  },
  computed: {
        ...mapGetters(['getWatchedProducts'])
  }
}
</script>

<style>

</style>