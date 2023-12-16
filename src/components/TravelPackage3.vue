<template>
    <div class="container my-5">
        <div class="row">
            <div class='col-8'>
                <div class="travel-package">
                    <img src="../assets/riceterrace.png" alt="Travel Package Image" class="travel-package-image"
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
                            <p style="text-align: center;"><b class='timedes shadow'>Time: 10.00AM - 1.00PM</b></p>
                            <h2>Experience Highlights</h2>
                            <ul>
                                <li>Encounter the beautiful and rare Bali Starling bird.</li>
                                <li>Learn about the efforts being made to protect and increase the bird's population.</li>
                                <li>Visit a temple in the forest and enjoy the scenic Jatiluwih rice terraces.</li>
                            </ul>

                            <p>Embark on a unique and meaningful journey with the Starling Bird Eco Tour in Bali. This
                                experience offers a close encounter with the critically endangered Bali Starling, a
                                beautiful bird species endemic to the island. With its pure white feathers, sapphire blue
                                eyes, and unique crest, the Bali Starling is considered the mascot of Bali. However, illegal
                                trapping for the caged-bird trade and habitat loss have pushed this species to the
                                critically endangered status.</p>

                            <p>This experience takes you to Utu village in Tabanan, where a captive breeding program is
                                underway to support the Bali Starling population. Learn about conservation efforts, witness
                                the birds in their ex-situ habitat, and receive a certificate of conservation support.</p>

                            <p>Along with the Bali Starling Experience, you'll have the opportunity to visit the enchanting
                                Pura Luhur Besikalung temple and admire the breathtaking Jatiluwih rice terraces, a UNESCO
                                World Heritage site.</p>

                            <h2>What to Expect</h2>
                            <ul>
                                <li>Learn about the critically endangered Bali Starling and its conservation efforts.</li>
                                <li>Guided walk at the Bali Starling area in Utu village.</li>
                                <li>Witness the Bali Starling in its ex-situ habitat.</li>
                                <li>Visit Pura Luhur Besikalung temple in the forest.</li>
                                <li>Enjoy the stunning scenery of Jatiluwih rice terraces.</li>
                            </ul>
                        </div>
                        <div>
                            <div class="reserve">
                                <a href="https://www.seeksophie.com/experiences/bali-starling-bird-eco-tour-critically-endangered-species-in-bali-ovmj1pyqj7"
                                    class="custom-btn shadow"><b>Make Your Reservation Now!</b></a>
                            </div>
                        </div>
                    </div>
                    <div class="activity shadow">
                        <h1 style="padding-bottom: 10px;"><b>{{ activity2Name }}</b></h1>
                        <div class="activity-description">
                            <p style="text-align: center;"><b class='timedes shadow'>Time: 2.00PM - 4.30PM</b></p>
                            <h2>Experience Highlights</h2>
                            <ul>
                                <li>Ebike tour through Jatiluwih's rice terraces, a UNESCO World Heritage site.</li>
                                <li>Beautiful lunch surrounded by rice terraces.</li>
                                <li>Support an eco-conscious local business that gives back to the community.</li>
                            </ul>

                            <p>This Jatiluwih UNESCO Ebike tour through rice terraces is a special experience that allows
                                visitors to see the stunning nature and traditional Balinese farming of the UNESCO World
                                Heritage site.</p>

                            <p>What makes this tour even more special is the eco-friendly aspect of it, using electric bikes
                                to visit areas that were previously inaccessible to cyclists. Your guide Green Bikes Bali
                                strives to minimize their ecological footprint and offers an authentic and sustainable tour,
                                making this experience not only special but also environmentally conscious.</p>

                            <h2>What to Expect</h2>
                            <ul>
                                <li>This two-hour tour starts from the Batukaru temple and takes you through stunning
                                    landscapes, local villages, dense jungles, giant bamboo forests, and rice terraces.</li>
                                <li>Guided by experienced local guides, visitors will see farmers at work in the fields,
                                    growing white and red rice.</li>
                                <li>The guides happily share their knowledge about this UNESCO site and answer any questions
                                    you may have.</li>
                                <li>The tour ends at Green Cafe, where you will enjoy an authentic Indonesian lunch
                                    surrounded by rice terraces.</li>
                            </ul>
                        </div>
                        <div class="reserve">
                            <a href="https://www.seeksophie.com/experiences/bali-jatiluwih-unesco-ebike-tour-through-rice-terraces-ol2zep7oj7"
                                class="custom-btn shadow"><b>Make Your Reservation Now!</b></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class='col-4'>
                <ReviewTravel3 />
            </div>
        </div>
    </div>
</template>
  
<script>
import ReviewTravel3 from "./ReviewTravel3.vue";
export default {
    components: {
        ReviewTravel3,
    },
    data() {
        return {
            showModal1: false,
            showModal2: false,
            packageName: 'Explore Jatiluwih Rice Terraces',
            packageDescription: "Catch a glimpse of the 2nd rarest bird in the world and explore Bali's UNESCO site!",
            activity1Name: "Saving Bali's Starling Bird",
            activity2Name: "Discover Bali's UNESCO Site on an E-bike",
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
}
</style>
    