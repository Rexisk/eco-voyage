<template>
  <NavBar/>
  <VehicleRental/>
  <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import VehicleRental from '@/components/VehicleRental.vue'

export default {
  name: 'RentalView',
  components: {
    NavBar,VehicleRental,FooterBar
  }
}
</script>
