<template>
  <div class="pick-container__title my-4 mb-4">
    <h2><b>Recommended Eco-friendly Activities</b></h2>
    <p>
      Choose from one of our compiled sustainable activities to visit for your next
      adventure!
    </p>
  </div>
  <div class="container">
    <div class="card" v-for="(activity, index) in activities" :key="index">
      <a :href="activity.url" target="_blank">
        <div class="card-image" :style="{ backgroundImage: 'url(' + activity.image + ')' }"></div>
        <div class="card-content">
          <h2 class="card-title custom-title"><b>{{ activity.title }}</b></h2>
          <div class="card-icon">
            <img :src="activity.image" :alt="activity.title" />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      activities: [
        {
          title: "Mount Batur Sunrise Hiking With Breakfast",
          url:
            "https://www.booking.com/attractions/id/prjuegtw7kml-mount-batur-guided-sunrise-hike.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31&start_time=02%3A00",
          image: "locations/sunsethiking.png",
        },
        {
          title: "Admission to Garuda Wisnu Kencana Cultural Park",
          url:
            "https://www.booking.com/attractions/id/prd7n5bnxb8r-admission-to-garuda-wisnu-kencana-cultural-park.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31&start_time=00%3A00&ticket_type=OFn9hO6T5rxA",
          image: "locations/garudapark.png",
        },
        {
          title: "Ayung River Rafting with Optional Waterfalls Trip",
          url:
            "https://www.booking.com/attractions/id/pr7tngepj8si-ayung-river-rafting-with-optional-waterfalls-trip.html?source=searchresults-product-card&ufi=-2701757",
          image: "locations/riverrafting.png",
        },
        {
          title: "Bali Snorkeling Tour at Blue Lagoon Beach: Private Transfer All-Inclusive",
          url:
            "https://www.booking.com/attractions/id/pr0amstlvyrk-blue-lagoon-snorkeling-tour.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31&start_time=08%3A00",
          image: "locations/snorkeling.png",
        },
        {
          title: "Ubud Cycling Tour",
          url: "https://www.booking.com/attractions/id/pran0vfqgmag-bali-cycling-tour-in-ubud.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31",
          image: "locations/cycling.png",
        },
        {
          title: "Private Central Bali Tour",
          url: "https://www.booking.com/attractions/id/pryr2rohk10f-private-central-bali-tour.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31&start_time=00%3A00&ticket_type=OFEpOfH5Ff1O",
          image: "locations/privatetour.png",
        },
        {
          title: "Jatiluwih in detail (1 h. e-bike tour in the rice terraces)",
          url: "https://www.booking.com/attractions/id/pr7zo9wmro3b-electric-bike-tour-of-jatiluwih.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31&start_time=12%3A30&ticket_type=OFvFoJqpY9pL",
          image: "locations/ebike.png",
        },
        {
          title: "Nusa Penida Instagram Tour",
          url:
            "https://www.booking.com/attractions/id/prvhv0esqo5f-nusa-penida-instagram-tour.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31&start_time=00%3A00",
          image: "locations/instatour.png",
        },
        {
          title: "Uluwatu Sunset Temple Tour",
          url:
            "https://www.booking.com/attractions/id/prljaqounaeg-sunset-tour-of-uluwatu-temple.html?source=searchresults-product-card&ufi=-2701757&date=2023-10-31&start_time=14%3A30&ticket_type=OF9gQ18C7P7T",
          image: "locations/sunsettemple.png",
        },
        {
          title: "Soul Purification at Pura Mengening in Bali",
          url:
            "https://www.booking.com/attractions/id/prfjbgkics24-soul-purification-experience.html?source=searchresults-product-card&ufi=-2701757&date=2023-11-01&start_time=08%3A00&ticket_type=OF7wh2hQ7hWg",
          image: "locations/purification.png",
        },
      ],
    };
  },
};
</script>
  
<style scoped>
.card-title.custom-title {
  color: black; /* Change the color to your preferred color (e.g., black) */
  padding: 10px;
  padding-bottom: 15px;
  
}

.pick-container__title {
  margin: 0 auto;
  text-align: center;
  color: #000;
  max-width: 50rem;
}

.pick-container__title p {
  font-size: 16px;
  font-family: Arial, sans-serif;
  color: #888;
  line-height: 1.5;
}

.pick-container__title h3 {
  font-size: 24px;
  font-family: Arial, sans-serif;
  font-weight: 500;
}

.pick-container__title h2 {
  font-size: 32px;
  font-family: Arial, sans-serif;
  margin: 0.5rem 0 1rem 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.card {

  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  flex: 0 0 calc(45%);
  /* 2 cards per row with 20px gap */
  width: 100%;
  /* Adjust the width as needed */
  height: auto;
  /* Allow the card to adjust its height based on content */
  display: flex;
  flex-direction: column;

}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-icon img {
  width: 100%;
  height: 100%;
}

image {
  width: 100%;
  height: 100%;
  background-size: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  flex: 0 0 calc(33%);
  /* 2 cards per row with 20px gap */
}

.card-content {
  padding: 10px;
}

.card-title {
  font-size: 20px;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
  
  