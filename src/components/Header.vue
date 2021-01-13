<template>
  <header class="header">
      <div class="head-addnav"></div>
      <div class="head-search"></div>
      <HeaderCart/>
  </header>
</template>

<script>
import HeaderCart from '@/components/header-components/HeaderCart.vue'
export default {
    components: {
        HeaderCart
    }
}
</script>

<style>

</style>