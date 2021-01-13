<template>
  <div class="head-cart">
          <div class="head-cart__imgwrap">
              <router-link :to="{name: 'Cart'}">
                  <img class="head-cart__img" src="../../assets/cart.svg" alt="Корзина">
              </router-link>
          </div>
          <div class="head-cart__wrap">
              <span class="head-cart__title">Ваша корзина</span>
              <span class="head-cart__amount">{{ getCartProducts.length }} товара</span>
              <span class="head-cart__price">{{ getCartPrice }} ₽</span>
          </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
       ...mapGetters(['getCartPrice', 'getCartAmount', 'getCartProducts'])
    }
}
</script>

<style>

</style>