<template>
  <div class="cart">
    <BreadCrumbs/>
    <div class="your-cart">
      <div class="your-cart__panel">
        <div class="your-cart__heading">
            <div class="your-cart__wrap">
              <span class="your-cart__title">Ваша корзина {{ getCartProducts.length ? null : 'пуста' }}</span>
              <span class="your-cart__amount" v-if="getCartProducts.length">
                {{ getTotalAmount }} товара
              </span>
            </div>
            <div class="your-cart__wrapbtn" v-if="getCartProducts.length">
              <button class="your-cart__clear" @click="removeAllProducts">Очистить корзину</button>
            </div>
        </div>
        <div class="air"></div>
        <CartProduct/>
        <TotalPrice/>
        <div class="your-cart__setup">
        <div class="your-cart__setup-wrap">
          <input type="checkbox" @change="setUpHadnler" v-model="setUp" class="your-cart__setup-check">
        </div>

        <div class="your-cart__setup-wrap">
          <img src="../assets/tools_icon.png" alt="">
        </div>

        <div class="your-cart__setup-wrap">
          <div class="your-cart__setup-title">Установка</div>
          <div class="your-cart__setup-desc">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
        </div>
      </div>  
      </div>
    </div>
    <WatchedProducts/>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/bread-crumbs/BreadCrumbs.vue'
import CartProduct from '@/components/cart-product/CartProduct.vue'
import TotalPrice from '@/components/cart-product/TotalPrice.vue'
import WatchedProducts from '@/components/cart-product/WatchedProducts.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Cart',
  data: () => ({
    setUp: false
  }),
  methods: {
    setUpHadnler(){
      this.$store.dispatch('setUpConsultation', this.setUp)
    },
    ...mapMutations(['removeAllProducts'])
  },
  components: {
    BreadCrumbs, CartProduct, TotalPrice, WatchedProducts
  },
  computed: {
    ...mapGetters(['getTotalAmount', 'getCartProducts'])
  }
}
</script>
