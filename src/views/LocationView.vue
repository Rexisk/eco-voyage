<template>
    <NavBar/>
    <LocationRecommendation/>
    <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import LocationRecommendation from '@/components/LocationRecommendation.vue'
export default {
  name: 'LocationView',
  components: {
    NavBar,FooterBar,LocationRecommendation
  }
}
</script>

