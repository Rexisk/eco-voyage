<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="feedback-form-box">
                    <h2 class="feedback-form-title">Leave Feedback</h2>
                    <form @submit.prevent="writeUserData">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" v-model="name" class="form-control  text-center" required />
                        </div>
                        <div class="form-group text-center">
                        </div>
                        <div class="form-group text-center">
                            <label for="rating">Rating</label>
                            <select id="noStars" v-model="rating" class="form-control">
                                <option class="text-center" value="&#9733;&#9733;&#9733;&#9733;&#9733;">
                                    &#9733;&#9733;&#9733;&#9733;&#9733;</option>
                                <option class="text-center" value="&#9733;&#9733;&#9733;&#9733;&#9734;">
                                    &#9733;&#9733;&#9733;&#9733;</option>
                                <option class="text-center" value="&#9733;&#9733;&#9733;&#9734;&#9734;">&#9733;&#9733;&#9733;</option>
                                <option class="text-center" value="&#9733;&#9733;&#9734;&#9734;&#9734;">&#9733;&#9733;</option>
                                <option class="text-center" value="&#9733;&#9734;&#9734;&#9734;&#9734;">&#9733;</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="msgContent">Feedback</label>
                            <textarea id="msgContent" v-model="feedback" class="form-control" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            <div class="col-12">
                <div id="feedbackList">
                    <div v-for="review in displayedReviews" :key="review.key" class="review-box card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">{{ review.name }} - {{ review.rating }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{ review.selectedPackage }}</h6>
                            <p class="card-text">{{ review.feedback }}</p>
                        </div>
                    </div>
                </div>
                <div v-if="totalPages > 1" class="d-flex justify-content-centre">
                    <ul class="pagination">
                        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                            <a class="page-link" @click="previousPage">Previous</a>
                        </li>
                        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                            <a class="page-link" @click="nextPage">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import { initializeApp } from "firebase/app";
  import { getDatabase, ref, push, onValue } from "firebase/database";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBVkRY7U7x8j4W5SQSSBfGaghgx7j54LAc",
    authDomain: "wad2-project-dd380.firebaseapp.com",
    databaseURL: "https://wad2-project-dd380-default-rtdb.firebaseio.com",
    projectId: "wad2-project-dd380",
    storageBucket: "wad2-project-dd380.appspot.com",
    messagingSenderId: "863981345933",
    appId: "1:863981345933:web:3583696bb048adb11156c4",
    measurementId: "G-MKY3ER5NJT"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  
  export default {
    data() {
        return {
            reviews: [],
            displayedReviews: [],
            name: '',
            selectedPackage: 'Jatiluwih Rice Terraces',
            rating: '&#9733;&#9733;&#9733;&#9733;&#9733;',
            feedback: '',
            currentPage: 1,
            reviewsPerPage: 3,
            whichPackage: 'Jatiluwih Rice Terraces',
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.reviews.length / this.reviewsPerPage);
        },
    },
    created() {
        this.fetchReviews();
    },
    watch: {
        whichPackage: 'fetchReviews', // Watch for changes to the whichPackage data property
    },
    methods: {
        fetchReviews() {
            const itemsRef = ref(db, 'users');
            onValue(itemsRef, (snapshot) => {
                this.reviews = [];
                snapshot.forEach((childSnapshot) => {
                    const review = childSnapshot.val();
                    if (this.whichPackage === 'All' || review.selectedPackage === this.whichPackage) {
                        review.key = childSnapshot.key;
                        this.reviews.push(review);
                    }
                });
                this.displayedReviews = this.getReviewsForPage(this.currentPage);
            });
        },
        writeUserData() {
            const itemsRef = ref(db, 'users');
            push(itemsRef, {
                name: this.name,
                selectedPackage: this.selectedPackage,
                rating: this.rating,
                feedback: this.feedback,
            }).then(() => {
                // Clear the form fields
                this.name = '';
                this.rating = '&#9733;&#9733;&#9733;&#9733;&#9733;';
                this.feedback = '';
            });
        },
        getReviewsForPage(page) {
            const startIndex = (page - 1) * this.reviewsPerPage;
            const endIndex = startIndex + this.reviewsPerPage;
            return this.reviews.slice(startIndex, endIndex);
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.displayedReviews = this.getReviewsForPage(this.currentPage);
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.displayedReviews = this.getReviewsForPage(this.currentPage);
            }
        },
    },
  };
  </script>
  
  
  
  <style scoped >
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  .feedback-form-box {
    width: 100%;
    max-width: 400px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .feedback-form-title {
    text-align: center;
  }
  
  .review-box {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 15px;
    width: 100%;
    /* Set all review boxes to have the same width */
  }
  
  .card-body {
    padding: 10px;
  }
  
  .btn {
    background-color: #007bff;
    color: #fff;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
