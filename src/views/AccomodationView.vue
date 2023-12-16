<template>
  <NavBar/>
  <AccomodationFinder/>
  <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import AccomodationFinder from '@/components/AccomodationFinder.vue';

export default {
  name: 'AccomodationView',
  components: {
    NavBar, FooterBar,
    AccomodationFinder
}
}
</script>
