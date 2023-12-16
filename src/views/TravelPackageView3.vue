<template>
    <NavBar/>
    <TravelPackage3/>
    <FooterBar/>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import FooterBar from '@/components/FooterBar.vue'
  import TravelPackage3 from '@/components/TravelPackage3.vue'

  
  export default {
    name: 'CalculatorView',
    components: {
      NavBar,FooterBar,TravelPackage3
    }
  }
  </script>
  