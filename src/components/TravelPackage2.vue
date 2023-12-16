<template>
    <div class="container my-5">
        <div class="row">
            <div class='col-8'>
                <div class="travel-package">
                    <img src="../assets/sanur.png" alt="Travel Package Image" class="travel-package-image"
                        style="max-width: 400px;">
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
                            <p style="text-align: center;"><b class='timedes shadow'>Time: 9.00AM - 11.30AM</b></p>
                            <h2>Experience Highlights</h2>
                            <ul>
                                <li>Explore Bali's beautiful landscapes on an eco-friendly electric bike.</li>
                                <li>Walk in the mangroves and ride an ebike through rice fields.</li>
                                <li>Visit a turtle sanctuary and hatchery to observe and learn about these fascinating
                                    creatures.</li>
                                <li>Explore the local market and learn about traditional Balinese offerings and fruits and
                                    vegetables.</li>
                            </ul>

                            <p>Explore the unspoiled side of Bali on a 2.5-hour electric bike tour. This tour offers an
                                opportunity to see beautiful parts of Sanur such as mangroves, rice fields, a local market,
                                and a turtle sanctuary while actively riding an ebike.</p>

                            <h2>Who Is It For?</h2>
                            <p>Travelers who enjoy outdoor activities and sustainable tourism will find this experience
                                particularly special.</p>

                            <h2>What to Expect</h2>
                            <ul>
                                <li>The tour includes a stop at a local market where you will learn about local fruits,
                                    vegetables, and traditional offerings.</li>
                                <li>One of the highlights of the e-bike tour is a visit to a turtle sanctuary where turtles
                                    are cared for and turtle eggs are protected until they hatch.</li>
                                <li>Often there will be baby turtles that have recently hatched which gives visitors the
                                    opportunity to release them in the ocean.</li>
                                <li>The tour ends at a beautiful tropical beach where guests can relax and enjoy a fresh
                                    young coconut.</li>
                            </ul>
                        </div>
                        <div>
                            <div class="reserve">
                                <a href="https://www.seeksophie.com/experiences/bali-sanur-village-ebike-tour-o1ojq13v54"
                                    class="custom-btn shadow"><b>Make Your Reservation Now!</b></a>
                            </div>
                        </div>
                    </div>
                    <div class="activity shadow">
                        <h1 style="padding-bottom: 10px;"><b>{{ activity2Name }}</b></h1>
                        <div class="activity-description">
                            <p style="text-align: center;"><b class='timedes shadow'>Time: 2.30PM - 3.30PM</b></p>
                            <h2>Experience Highlights</h2>
                            <ul>
                                <li>Taste and pair different types of locally made cheese with tropical preserves.</li>
                                <li>Get insights into local cheese production in a tropical country.</li>
                            </ul>

                            <p>During this cheese tasting session, you'll be introduced to the history, variety, and trends
                                of Indonesian Cheese. This is perfect for cheese lovers and those looking to explore the
                                local flavors of Bali!</p>

                            <h2>What to Expect</h2>
                            <ul>
                                <li>Guests will enjoy a generous amount of three different types of Indonesian cheese,
                                    crackers, and tropical preserves.</li>
                                <li>The knowledgeable host will discuss the difference in taste, texture, and aroma and give
                                    guests a glimpse into the local cheese production process and insights into the cheese
                                    business in a tropical country.</li>
                                <li>Rosalie Cheese takes pride in producing natural Indonesian cheese in Bali, using
                                    traditional cheese-making techniques and unique local ingredients for a one-of-a-kind
                                    flavor experience.</li>
                            </ul>
                        </div>
                        <div class="reserve">
                            <a href="https://www.seeksophie.com/experiences/bali-indonesian-cheese-tasting-pairing-at-a-zen-balinese-garden-ol2zmygmz7"
                                class="custom-btn shadow"><b>Make Your Reservation Now!</b></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-4'>
                <ReviewTravel />
            </div>
        </div>
    </div>
</template>
  
<script>
import ReviewTravel from "./ReviewTravel.vue";
export default {
    components: {
        ReviewTravel,
    },
    data() {
        return {
            showModal1: false,
            showModal2: false,
            packageName: 'Sanur Adventure',
            packageDescription: "Ride around Sanur Village and explore it's local market and turtle sanctuary. Afterwards refresh yourself with a cheese-tasting session!",
            activity1Name: 'Sanur Village E-Bike Tour | Local Market, Turtle Sanctuary',
            activity2Name: 'Cheese Tasting and Pairing | Sanur',
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
  