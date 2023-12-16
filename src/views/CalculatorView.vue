<template>
  <NavBar/>
  <GameCanvas/>
  <FooterBar/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import GameCanvas from '@/components/GameCanvas.vue'

export default {
  name: 'CalculatorView',
  components: {
    NavBar,FooterBar,GameCanvas
  }
}
</script>
