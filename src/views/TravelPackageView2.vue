<template>
    <NavBar/>
    <TravelPackage2/>
    <FooterBar/>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue'
  import FooterBar from '@/components/FooterBar.vue'
  import TravelPackage2 from '@/components/TravelPackage2.vue'

  
  export default {
    name: 'CalculatorView',
    components: {
      NavBar,FooterBar,TravelPackage2
    }
  }
  </script>
  