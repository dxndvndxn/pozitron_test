<template>
  <div class="your-cart__wrap">
      <div class="your-cart__product" v-for="(prd, i) in getCartProducts" :key="i">
          <div class="your-cart__product-desc">
              <div class="your-cart__product-imgwrap">
                  <img class="your-cart__product-img" :src="require(`@/assets/${prd.productImg}`)" :alt="prd.productTitle">
              </div>
              <div class="your-cart__product-descwrap">
                  <span class="your-cart__product-title">{{ prd.productTitle }}</span>
                  <span class="your-cart__product-small">{{ prd.productDesc }}</span>
                  <span class="your-cart__product-vendor">Артикул: {{prd.productVendor }} </span>
              </div>
          </div>

          <div class="your-cart__product-btns">
              <button class="your-cart__product-btn" @click="countAmount(-1, prd.productId, prd.productAmount)">-</button>
              <button class="your-cart__product-btn">{{ prd.productAmount }}</button>
              <button class="your-cart__product-btn" @click="countAmount(1, prd.productId, prd.productAmount)">+</button>
              <div class="your-cart__product-piece" v-once v-show="prd.productAmount > 1">{{ prd.productPrice }}/шт.</div>
          </div>

          <div class="your-cart__product-price">
             {{ prd.productPrice * prd.productAmount}} ₽
          </div>

          <span class="remove" @click="removeProduct(prd.productId)"></span>
     </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    created(){
        this.$store.dispatch('getCartProductsFromBack')
          .then(() => this.$store.dispatch('countPrice'))
    },
    methods: {
        countAmount(point, id, amount){
            if (amount === 1 && point === -1) return
            this.$store.dispatch('countAmount', {point, id})
              .then(() => this.$store.dispatch('countPrice'))
        },
        removeProduct(id){
            this.$store.dispatch('removeProduct', id)
              .then(() => this.$store.dispatch('countPrice'))
        }
    },
    computed: {
        ...mapGetters(['getCartProducts'])
    }
}
</script>

<style>

</style>