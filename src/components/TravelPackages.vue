<template>
    <h2>Travel Packages</h2>
    <div class="travelpackage row row-cols-1 row-cols-md-3 g-3">
        <!-- <div class="col-1"></div> -->
        <div class="col" v-for="(travelPackage, index) in travelPackages" :key="index">
            <div class="card h-100" @mouseenter="hoveredPackage = index" @mouseleave="hoveredPackage = null"
                :class="{ 'hovered': hoveredPackage === index }">
                <img :src="require(`@/assets/${travelPackage.imageUrl}`)" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><b>{{ travelPackage.title }}</b></h5>
                    <p v-if="hoveredPackage === index" class="card-text">{{ travelPackage.description }}</p>
                </div>
                <div class="card-footer" v-if="hoveredPackage === index">
                    <a :href="travelPackage.packageurl" class="btn btn-success">Find out more!</a>
                </div>
            </div>
        </div>
        <!-- <div class="col-1"></div> -->
    </div>
</template>
  
<style scoped>
.travelpackage {
    margin-top: 15px;
    margin-bottom: 30px;
}

.card {
    transition: transform 0.2s ease-in-out;
}

.card.hovered {
    transform: scale(1.05);
}

.card-footer {
    display: none;
}

.card.hovered .card-footer {
    display: block;
}

.card-body .card-text {
    display: none;
}

.card.hovered .card-text {
    display: block;
}
</style>
  
<script>
export default {
    data() {
        return {
            hoveredPackage: null,
            travelPackages: [
                {
                    title: "Explore Sanur",
                    description: "Ride around Sanur Village and explore it's local market and turtle sanctuary. Afterwards refresh yourself with a cheese-tasting session!",
                    imageUrl: "sanuroutside.png",
                    packageurl: "/TravelPackage2"
                },
                {
                    title: "Explore Ubud",
                    description: "Experience traditional cuisine in an organic farm, perfect for families. Withness magical fireflies, and cherish the night.",
                    imageUrl: "Package2.png",
                    packageurl: "/TravelPackage1"
                },
                {
                    title: "Jatiluwih Rice Terraces",
                    description: "Catch a glimpse of the 2nd rarest bird in the world and explore Bali's UNESCO site!",
                    imageUrl: "ubug.png",
                    packageurl: "/TravelPackage3"
                }
            ]
        };
    }
};
</script>
  