<template>
  <NavBar/>
  <CarbonOffset/>
  <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import CarbonOffset from '@/components/CarbonOffset.vue';

export default {
  name: 'OffsetView',
  components: {
    NavBar, FooterBar,
    CarbonOffset
}
}
</script>
