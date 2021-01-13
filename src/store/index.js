
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartAmount: 0,
    cartPrice: 0,
    cartProducts: [],
    totalAmount: 0,
    setUpConsultation: false,
    watchedProducts: []
  },
  mutations: {
    CartProducts(state, data){
      state.cartProducts = data
    },
    changeTotalPrice(state, data){
      state.cartPrice = data
    },
    changeTotalAmount(state, data){
      state.totalAmount = data
    },
    changeSetUpConsultation(state, data){
      state.setUpConsultation = data
    },
    removeAllProducts(state){
      state.cartProducts = []
      state.totalAmount = 0
      state.cartPrice = 0
    },
    watchedProductsMutate(state, data){
      state.watchedProducts = data
    }
  },
  actions: {
    getCartProductsFromBack({commit}){
      return new Promise(resolve => {
        let cartProducts = [
          {
            productImg: 'productcard_1.png',
            productTitle: 'Вытяжное устройство G2H',
            productDesc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            productVendor: 'G2H1065',
            productAmount: 1,
            productPrice: 12644,
            productId: 1
          },
          {
            productImg: 'productcard_2.png',
            productTitle: 'Вытяжное устройство BXC',
            productDesc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            productVendor: 'G2H1065',
            productAmount: 1,
            productPrice: 12644,
            productId: 2
          },
          {
            productImg: 'productcard_3.png',
            productTitle: 'Вытяжное устройство GHN',
            productDesc: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
            productVendor: 'G2H1065',
            productAmount: 1,
            productPrice: 12644,
            productId: 3
          }
        ]
        commit('CartProducts', cartProducts)
        resolve()
      })
    },
    countPrice({getters, commit}){
      let totalPrice = 0
      let totalAmount = 0
      
      if (getters.getCartProducts.length) {
        getters.getCartProducts.forEach(item => {
          totalPrice += item.productAmount * item.productPrice
          totalAmount += item.productAmount
        })
      }

      commit('changeTotalPrice', totalPrice)
      commit('changeTotalAmount', totalAmount)
    },
    countAmount({commit, getters}, data){
      return new Promise(resolve => {
        getters.getCartProducts.forEach(item => {
          if (item.productId === data.id) item.productAmount = item.productAmount + data.point
        })
  
        commit('CartProducts', getters.getCartProducts)
        resolve()
      })
    },
    setUpConsultation({commit}, data){
      commit('changeSetUpConsultation', data)
    },
    removeProduct({commit, getters}, id){
      return new Promise(resolve => {
        let leftProducts = getters.getCartProducts.filter(item => item.productId !== id)
        commit('CartProducts', leftProducts)
        resolve()
      })
    },
    sentCartProduct({getters, state}){
      if (!getters.getCartProducts.length) return

      let cartProduct = []

      getters.getCartProducts.forEach(prd => {
        cartProduct.push({product_id: prd.productId, product_amount: prd.productAmount})
      })
      
      let dataToBack = {
        product: cartProduct,
        consultation: state.setUpConsultation
      }

      console.log(dataToBack, 'Data for backend')
      return new Promise((resolve) => {
        fetch('http://some.site/api', {method: 'POST', body: JSON.stringify(dataToBack)})
          .then(() => {
            resolve()
          })
      })
    },
    watchedProducts({commit}){
      return new Promise(resolve => {
        let watchedProd = [
          {
            watchedProdImg: 'carousel_1.png',
            watchedProdTitle: 'BXC',
            watchedProdDesc: 'Вытяжное устройство для механической системы вентиляции',
            watchedProdPriceR: ['6848', '56584'],
            watchedProdPriceE: ['77.60', '643.86']
          },
          {
            watchedProdImg: 'carousel_2.png',
            watchedProdTitle: 'G2H',
            watchedProdDesc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            watchedProdPriceR: ['6848', '56584'],
            watchedProdPriceE: ['77.60', '643.86']
          },
          {
            watchedProdImg: 'carousel_3.png',
            watchedProdTitle: 'GHN',
            watchedProdDesc: 'Вытяжное устройство с датчиком присутствия',
            watchedProdPriceR: ['6848', '56584'],
            watchedProdPriceE: ['77.60', '643.86']
          },
          {
            watchedProdImg: 'carousel_4.png',
            watchedProdTitle: 'TDA',
            watchedProdDesc: 'Вытяжное устройство с датчиком присутствия',
            watchedProdPriceR: ['6848', '56584'],
            watchedProdPriceE: ['77.60', '643.86']
          },
          {
            watchedProdImg: 'carousel_5.png',
            watchedProdTitle: 'G2H',
            watchedProdDesc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            watchedProdPriceR: ['6848', '56584'],
            watchedProdPriceE: ['77.60', '643.86']
          },
          {
            watchedProdImg: 'carousel_6.png',
            watchedProdTitle: 'G2H',
            watchedProdDesc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
            watchedProdPriceR: ['6848', '56584'],
            watchedProdPriceE: ['77.60', '643.86']
          },
        ]
        commit('watchedProductsMutate', watchedProd )
        resolve()
      })
    }
  },
  getters: {
    getCartAmount: state => state.cartAmount,
    getCartPrice: state => state.cartPrice,
    getCartProducts: state => state.cartProducts,
    getTotalAmount: state => state.totalAmount,
    getSetUpConsultation: state => state.setUpConsultation,
    getWatchedProducts: state => state.watchedProducts
  }
})
