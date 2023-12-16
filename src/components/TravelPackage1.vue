<template>
  <div class="container my-5">
    <div class="row">
      <div class='col-8'>
        <div class="travel-package">
          <img src="../assets/inpackage1.png" alt="Travel Package Image" class="travel-package-image">
          <div class="travel-package-details">
            <h1 class="display-3 fw-bold mb-3"><u class="text-warning">
                <p class="text-success">{{ packageName }}</p>
              </u></h1>
            <p class="travel-package-description">{{ packageDescription }}</p>
          </div>
        </div>
        <div class="activities">
          <div class="activity shadow">
            <h1 style="padding-bottom: 10px;"><b>{{ activity1Name }}</b></h1>
            <div class="activity-description">
              <p style="text-align: center;"><b class = 'timedes shadow'>Time: 7.30AM - 2.00PM</b></p>
              <p>Only cooking school with its own organic farm - so you truly have farm-to-table cooking!</p>
              <p>Visit to the local farmers market where you can learn about local produce (for morning session)</p>
              <p>Great for families!</p>
              <p>Bali Farm Cooking School offers a truly special and immersive experience for those looking to learn about
                Balinese cuisine and culture. What sets this cooking school apart is its commitment to organic farming
                practices and its own farm that supplies fresh ingredients for the cooking classes.</p>
              <p>Led by friendly and knowledgeable local chefs, guests not only learn how to prepare traditional Balinese
                dishes, but also get to experience the entire process of where their food comes from - from visiting the
                morning market to observing daily life in Bali's countryside market, to touring the organic farm and
                harvesting fresh ingredients.</p>
              <p>Suitable for all ages, this experience is perfect for families and anyone who wants to learn important
                cooking skills and appreciate the natural resources that nourish our bodies.</p>
            </div>
            <div>
              <div style="padding-bottom: 10px;">
                <span><b>Find out more about the menus you will be cooking!</b></span>
              </div>
              <div class="row" style="padding-bottom: 20px;">
                <div class="col"></div>
                <div class="col"><button @click="showModal1 = true" class="btn btn-success shadow"><b>Regular
                      Menu</b></button></div>
                <div class="col-1"></div>
                <div class="col"><button @click="showModal2 = true" class="btn btn-success shadow"><b>Vegan
                      Menu</b></button><br></div>
                <div class="col"></div>
              </div>
              <div class = "reserve">
                <a href="https://www.seeksophie.com/experiences/bali-farm-tour-and-cooking-class-morning-session-o14jnmn85q"
                  class="custom-btn shadow"><b>Make Your Reservation Now!</b></a>
              </div>

              <!-- Modal -->
              <div v-if="showModal1" class="modal">
                <div class="modal-content">
                  <span class="close" @click="showModal1 = false">&times;</span>
                  <p>Base Gede (Traditional spices paste)</p>
                  <p>Sayur Urab (mix green salad with coconut and spice)</p>
                  <p>Opor Ayam (Balinese Chicken curry)</p>
                  <p>Sate Lilit (Traditional Balinese Kebab made with Pork meat and Balinese spice)</p>
                  <p>Tuna Sambal Matah (Tuna with Raw Sauce)</p>
                  <p>Tempe Asam Manis (Sweet Sour Tempe)</p>
                  <p>Pisang Goreng (Our Banana fritters with coconut and melted palm sugar) or Black rice pudding</p>
                </div>
              </div>
              <div v-if="showModal2" class="modal">
                <div class="modal-content">
                  <span class="close" @click="showModal2 = false">&times;</span>
                  <p>Base Gede (Traditional spices paste)</p>
                  <p>Gado Gado (Steamed vegetables with traditional peanut sauce)</p>
                  <p>Opor Tempe (Balinese tempe curry)</p>
                  <p>Bergedel (fried corn with Balinese spice)</p>
                  <p>Tempe Asam Manis (Sweet Sour Tempe)</p>
                  <p>Tum Bambu (Young Bambu wrap in Banana Leave)</p>
                  <p>Pisang Goreng (Our Banana fritters with coconut and melted palm sugar)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="activity shadow">
            <h1 style="padding-bottom: 10px;"><b>{{ activity2Name }}</b></h1>
            <div class="activity-description">
              <p style="text-align: center;"><b class = 'timedes shadow'>Time: 5.00PM - 8.30PM</b></p>
              <p>Experience the mesmerizing activities of fireflies at night.</p>
              <p>Learn why fireflies are crucial for the environment and biodiversity.</p>
              <p>Support the preservation of fireflies and their natural habitat.</p>
              <p>Fireflies are fascinating creatures that have captivated the imaginations of people for centuries. This
                safari offers a unique opportunity to witness the mesmerizing activities of fireflies and learn more about
                their behavior and habitat.</p>

              <h3>Why is Firefly Conservation Important?</h3>
              <p>Fireflies are magical creatures that light up the night sky. They are a joy to see, and their presence is
                a
                sign of a healthy ecosystem. However, fireflies are declining in many parts of the world, including Bali.
              </p>
              <p>There are many reasons why fireflies are disappearing:</p>
              <ul>
                <li>Habitat loss: Fireflies need clean air, non-contaminated water, and fertile soil to survive. When
                  their
                  habitats are destroyed, they cannot live there anymore.</li>
                <li>Light pollution: Fireflies use light to communicate with each other, and when there is too much
                  artificial light, they cannot see each other. This can lead to problems with mating and reproduction.
                </li>
                <li>Pesticides: Pesticides can kill fireflies directly, or they can make it difficult for them to find
                  food.
                </li>
              </ul>
              <p>The decline of fireflies is a serious problem. Fireflies are important pollinators, and they help to
                control insect pests. They also play a role in the food chain. Without fireflies, our ecosystems would be
                less healthy.</p>

              <p>By joining this activity, you'll not only experience the magic of these creatures but also support their
                conservation in the village. Your participation directly contributes to their protection and a sustainable
                environment.</p>
                
            </div>
            <div class = "reserve">
                <a href="https://www.seeksophie.com/experiences/bali-fireflies-night-safari-with-the-local-conservationist-oxp5w10vzr"
                  class="custom-btn shadow"><b>Make Your Reservation Now!</b></a>
              </div>
          </div>
        </div>
      </div>
      <div class='col-4'>
        <ReviewTravel2 />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewTravel2 from "./ReviewTravel2.vue";
export default {
  components: {
    ReviewTravel2,
  },
  data() {
    return {
      showModal1: false,
      showModal2: false,
      packageName: 'Ubud Adventure',
      packageDescription: 'Experience traditional cuisine in an organic farm, perfect for families. Withness magical fireflies, and cherish the night.',
      activity1Name: 'Farm-to-Table Balinese Cooking',
      activity2Name: 'Fireflies Safari with Local Conservationist',
    };
  },

};
</script>

<style scoped>
.timedes {
  font-size: larger;
  background-color: white;
  padding: 7px;
}
.reserve {
  margin-bottom: 10px;
  background-color: whitesmoke;
  padding-top: 15px;
  padding-bottom: 15px;
}
.custom-btn {
  background-color: #4CAF50;
  color: white;
  margin: 20px;
  padding: 10px 20px;
  border: none;
  /* border-radius: 5px; */
  cursor: pointer;
}

.custom-btn:hover {
  background-color: #45a049;
}

.modal {
  display: block;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.travel-package {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.travel-package-image {
  max-width: 400px;
  max-height: 300px;
  object-fit: cover;
  margin-right: 20px;
}

.travel-package-description {
  font-size: 16px;
}

.activities {
  margin-bottom: 20px;
}

.activity {
  border: 1px solid #e1e1e1;
  padding: 20px;
  padding-bottom: 0px;
  margin-bottom: 20px;
}

.activity h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.activity-description {
  text-align: left;
}</style>
