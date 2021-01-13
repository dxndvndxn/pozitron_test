<template>
  <ul class="crumbs">
      <li v-for="(crumb, i) in crumbs" :key="i" class="crumbs__item">
          <router-link :to="{name: crumb.link}" exact-active-class="active-crumb" class="crumbs__link">
              {{ crumb.name }}
          </router-link>
          <img src="../../assets/crumb-arrow.svg" class="crumbs__arrow" v-if="crumbs.length - 1 !== i">
      </li>
  </ul>
</template>

<script>
export default {
    name: 'BreadCrumbs',
    data: () => ({
        crumbs: [{name: 'Главная', link: 'Home'}, {name: 'Корзина', link: 'Cart'},]
    })
}
</script>

<style>

</style>