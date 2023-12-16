<template>
    <div class="container">
        <h2>Carbon Offset Programe</h2>
        <p> Donate to projects which will help to offset your carbon footprint</p>
        <div class="container text-start">
            <div class="row">
                <div class="col-8   ">
                    <h4>Yogyakarta Special Province Wildlife Reserve Restoration and Recovery</h4>
                    <p><b>Objectives of our Wildlife Reserve Restoration and Recovery</b></p>
                    <ul>
                        <li>Restoration and recovery of degraded wildlife reserve.</li>
                        <li>Development of rainforest using Javanese native tree species.</li>
                        <li>Contribution to long-term local economy via agricultural capacity building and fruit supply.
                        </li>
                        <li>Enlightenment of the importance of forest throuh conducting environmental education.
                        </li>
                    </ul>
                </div>

                <div class="col-4">
                    <img src="../assets/yogyakarta-forest.jpg" alt="Article Image" class="w-75">
                </div>
            </div>
            
        <div class="row text-center my-2">
            <div class="col-md-3" v-for="card in cards" :key="card.id">
                <div class="card mb-3" :class="{ 'selected': card.id === selectedCardId }" @click="selectCard(card.id)">
                    <div class="card-body">
                        <h5 class="card-title">{{ card.offsets }} Metric Tonnes</h5>
                        <p class="card-text">{{ card.id * 2205 }} lbs CO2 || <b>${{ card.price }}</b></p>
                        <a :href="card.link" class="purple-button">Donate</a>
                    </div>
                </div>
            </div>
        </div>
            <p>As a result of the above actions, we aim to regenerate the forest and build the sustainable community. This
                is situated at 350 hectares of "Paliyan Wildlife Reserve" in Yogyakarta Special Province, Java. The first
                collaboration between Ministry of Environment and Forestry of Indonesia and Japanese private enterprise to
                conduct reforestation

                Bolstering local economy using "agroforestry method", replanting mainly native species, restoring both
                animal and plant species in natural way and planting fruit trees and agricultural goods
                Survey on the restoration of forest and ecosystem by Gajah Mada University in collaboration with us
                Environmental education to elementary school students conducted in collaboration with Gajah Mada University
                for the purpose of preventing them from continual illegal cutting
                MSIG Indonesia's donating educational tools such as projectors, musical instruments and fixtures to several
                elementary schools in Paliyan and Saptosari, Yogyakart
                Contributing to global warming prevention by absorbing 70,000 tons of CO2 over 20 years from 2005</p>
        </div>
    </div>
</template>

<script>
// import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
    data() {
        return {
            cards: [
                { id: 1, offsets: 1, price: 11.34, link: 'https://buy.stripe.com/test_bIY03A6qlcUv800eUU' },
                { id: 2, offsets: 2, price: 22.20, link: 'https://buy.stripe.com/test_7sIeYu9Cx1bN2FGeUV' },
                { id: 3, offsets: 3, price: 33.40, link: 'https://buy.stripe.com/test_eVa7w22a53jVcgg002' },
                { id: 4, offsets: 10, price: 99.9, link: 'https://buy.stripe.com/test_00g9Ea5mh9IjcggeUX' },
            ],
            selectedCardId: null,
        };
    },
    // components: {
    //     StripeCheckout,
    // },
    methods: {
        selectCard(cardId) {
            this.selectedCardId = cardId;
        },
        processPayment() {
            // Implement your payment processing logic here
            // For example, you can use the Stripe API to process the payment
            // You can refer to the Stripe documentation for more details on how to integrate Stripe with your Vue.js app
        },
    },
};
</script>

<style>
/* Add any custom styles here */
.selected {
    border-color: blue;
}

.purple-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: purple;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.purple-button:hover {
    background-color: darkpurple;
}
</style>
