<template>
    <NavBar/>
    <TravelPackage1/>
    <FooterBar/>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import FooterBar from '@/components/FooterBar.vue'
  import TravelPackage1 from '@/components/TravelPackage1.vue'

  
  export default {
    name: 'CalculatorView',
    components: {
      NavBar,FooterBar,TravelPackage1
    }
  }
  </script>
  