<template>
  <div class="your-cart__total">
      <div class="your-cart__total-title">
          Итого
      </div>
      <div class="your-cart__total-infowrap">
          <div class="your-cart__total-info"><span>Сумма заказа</span><span>{{ getCartPrice }} ₽</span></div>
          <div class="your-cart__total-info"><span>Количество</span><span>{{ getTotalAmount }} шт</span></div>
          <div class="your-cart__total-info">
              <span>Установка</span>
              <span>{{ getSetUpConsultation ? 'Да' : 'Нет'}}</span>
          </div>
      </div>
      <div class="your-cart__total-pricewrap">
          <span>Стоимость товаров</span>
          <span class="your-cart__total-price">{{ getCartPrice }} ₽</span>
      </div>

      <div class="your-cart__total-btns">
          <button class="your-cart__total-btn btn_blu" @click="sentCartProduct">Оформить заказ</button>
          <button class="your-cart__total-btn btn_transp">Купить в 1 клик</button>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getCartPrice', 'getTotalAmount', 'getSetUpConsultation'])
    },
    methods: {
        sentCartProduct(){
            this.$store.dispatch('sentCartProduct')
        }
    }
}
</script>

<style>

</style>