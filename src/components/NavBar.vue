<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span class="navbar-brand ps-4"><router-link class="nav-link" to="/">ECO-VOYAGE BALI</router-link></span>
    <!-- <span class="navbar-brand ps-4" >ECO-VOYAGE BALI</span> -->
    <button class="navbar-toggler" type="button" @click="toggleNavbarCollapse">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :class="{ show: isNavbarCollapsed }" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" @click="isNavbarCollapsed = false">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item" @click="isNavbarCollapsed = false">
          <a class="nav-link" @click="openHTMLPage" id="baliGame">PixelBali</a>
        </li>
        <li class="nav-item" @click="isNavbarCollapsed = false">
          <router-link class="nav-link" to="/rental">Eco-Vehicles</router-link>
        </li>
        <li class="nav-item" @click="isNavbarCollapsed = false">
          <router-link class="nav-link" to="/accoms">Accomodations</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
  
<script>
export default {
  data() {
    return {
      isNavbarCollapsed: false,
    };
  },
  methods: {
    toggleNavbarCollapse() {
      this.isNavbarCollapsed = !this.isNavbarCollapsed;
    },
    openHTMLPage() {
      window.location.href = 'https://ecovoyage-game.netlify.app/';
    }

  },
};
</script>
  
<style scoped>
.navbar-brand {
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar-nav .nav-link {
  font-size: 1.2rem;
}

#baliGame:hover{
  cursor: pointer;
}

.navbar {
  background-color: rgba(193, 227, 255);
}

/* 
  .navbar a{
      color: rgb(225, 225, 225);
  } */

.navbar-nav {
  margin-left: auto;
}
</style>
  