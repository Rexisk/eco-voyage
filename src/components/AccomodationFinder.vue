<template>
  <div class="pick-container">
    <div class="pick-container__title">
      <h2 style="margin-top: 1rem;"><b>Accomodations Finder</b></h2>
      <h4>Find the perfect accommodations for your next adventure!</h4>
      <p>
        Search, compare, and book hotels that suit your travel needs
      </p>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row justify-content-center ">
      <div class="col-md-6 col-sm-12">
        <div id="searchInput" class="text-center">
          <div class="row ">
            <div class="col-md-6 mb-4 text-start">
              <label for="checkIn" class="form-label text-start fs-6"><b>Check In date:</b></label>
              <input type="date" id="checkIn" class="form-control" v-model="checkIn" :min="minCheckInDate"
                placeholder="Select Check In date" />
              <div v-if="!checkInValid" class="text-danger">*Please select a Check In date.</div>
            </div>
            <div class="col-md-6 mb-4 text-start">
              <label for="checkOut" class="form-label text-start fs-6"><b>Check Out date:</b></label>
              <input type="date" id="checkOut" class="form-control" v-model="checkOut" :min="checkIn"
                placeholder="Select Check Out date" />
              <div v-if="!checkOutValid" class="text-danger">*Please select a Check Out date.</div>
            </div>
          </div>
          <div class='text-start mb-4'>
            <label for="adultNo" class="form-label text-start fs-6"><b>Number of adults:</b></label>
            <input type="number" id="adultNo" class="form-control" v-model="adultNo"
              placeholder="Enter the number of adults" />
            <div v-if="!adultNoValid" class="text-danger">*Please enter the number of people.</div>
          </div>
          <div class='text-start mb-4'>
            <label for="roomNo" class="form-label text-start fs-6"><b>Number of rooms:</b></label>
            <input type="text" id="roomNo" class="form-control" v-model="roomNo"
              placeholder="Enter the number of rooms" />
            <div v-if="!roomNoValid" class="text-danger">*Please enter the number of rooms.</div>
          </div>
          <div class='text-start'>
            <label for="orderSelect" class="form-label text-start fs-6"><b>Sort by:</b></label>
          </div>
          <select id="orderSelect" class="form-select mb-4" v-model="orderSelect">
            <option value="popularity">Popularity</option>
            <option value="class_descending">Stars (5 to 2)</option>
            <option value="class_ascending">Stars (2 to 5)</option>
            <option value="review_score">Guest Review Score</option>
            <option value="price">Price (low to high)</option>
          </select>
          <button class="btn btn-success" @click="checkFormValidity"><b>Search Accommodations</b></button>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="mt-12 mt-lg-0 position-relative">

          <img src="..\..\src\assets\Accomodation.jpeg" alt="online course"
            class="img-fluid rounded-4 w-100 z-1 position-relative">

        </div>
      </div>
    </div>
    <div class="row mt-4 justify-content-center">
      <div class="col-lg-8 col-md-12">
        <div class="text-center">
          <div class="loading-animation" v-if="isLoading">
            <div class="spinner"></div>
          </div>
          <table v-if="showTable" class="table table-hover justify-content-center">
            <thead>
              <tr>
                <th class="custom" colspan="2" id="hotelTable">Accomodation
                </th>
                <th class="custom sortable-header">Rating
                </th>
                <th class="custom">Type
                </th>
                <th class="custom sortable-header">Review Score
                </th>

                <th class="custom sortable-header" @click="sortTable('emissions')">Emissions
                  <span v-if="sortBy === 'emissions'">
                    <span v-if="sortDirection == 'asc'">&#9650;</span>
                    <span v-else-if="sortDirection == 'desc'">&#9660;</span>
                  </span>
                  <span v-else>&#9650;&#9660;</span>
                </th>
                <th class="custom">Book Now</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(hotel, index) in hotels" :key="index">
                <td><img :src='hotel.main_photo_url'></td>
                <td>{{ hotel.hotel_name }}</td>
                <td>{{ hotel.stars }}</td>
                <td>{{ hotel.accommodation_type_name }}</td>
                <td>{{ hotel.review_score }} ({{ hotel.review_score_word }})</td>
                <td>{{ hotel.emissions }} kg CO2e</td>
                <td><a :href="hotel.url" target="_blank" class="btn btn-success btn-sm">Book Now</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      checkIn: '',
      checkOut: '',
      adultNo: '',
      roomNo: '',
      orderSelect: 'popularity',
      checkInValid: true,
      checkOutValid: true,
      adultNoValid: true,
      roomNoValid: true,
      hotels: [],
      hotelEmissions: '',
      hotelID: '',
      showTable: false,
      isLoading: false,
      noNights: '',
      hotelEmissionResult: '',
      minCheckInDate: '',
      sortDirection: 'asc',
      sortBy: null
    };
  },
  mounted() {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Set minimum checkIn date as tomorrow
    this.minCheckInDate = today.toISOString().split('T')[0];
  },
  watch: {
    checkIn(newDate) {
      if (newDate && this.checkOut && newDate > this.checkOut) {
        this.checkOut = '';
      }
    },
    checkOut(newDate) {
      if (newDate && this.checkIn && newDate < this.checkIn) {
        this.checkIn = '';
      }
    }
  },
  methods: {
    checkFormValidity() {
      this.checkInValid = !!this.checkIn;
      this.checkOutValid = !!this.checkOut;
      this.adultNoValid = !!this.adultNo;
      this.roomNoValid = !!this.roomNo;

      // Check if all required fields are filled
      if (this.checkInValid && this.checkOutValid && this.adultNoValid && this.roomNoValid) {
        this.formIsValid = true;
        this.getDestination(); // Proceed with the search
      } else {
        this.formIsValid = false;
      }
    },
    getDestination() {
      this.isLoading = true
      const checkInDate = new Date(this.checkIn);
      const checkOutDate = new Date(this.checkOut);
      const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
      this.noNights = Math.round(
        (checkOutDate - checkInDate) / oneDay
      );
      const url = 'https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete';

      axios.get(url, {
        headers: {
          'X-RapidAPI-Key': 'ec30787aecmsha7e44713edd7b72p1739d0jsn0344ed976c69',
          'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        },
        params: {
          text: 'Bali',
          languagecode: 'en-us'
        }
      })
        .then(response => {
          var stuff = response.data;
          var dest = stuff[0].dest_id;
          var searchType = stuff[0].dest_type;
          this.getPropertiesList(dest, searchType, this.checkIn, this.checkOut, this.adultNo, this.roomNo, this.orderSelect);
          // console.log('hi')
        })
    },
    getPropertiesList(dest, dest_type, checkIn, checkOut, adultNo, roomNo, orderSelect) {
      var hotelList = [];
      axios.get('https://apidojo-booking-v1.p.rapidapi.com/properties/list', {
        headers: {
          'X-RapidAPI-Key': 'ec30787aecmsha7e44713edd7b72p1739d0jsn0344ed976c69',
          'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
        },
        params: {
          offset: '0',
          arrival_date: checkIn,
          departure_date: checkOut,
          guest_qty: adultNo,
          dest_ids: dest,
          room_qty: roomNo,
          search_type: dest_type,
          order_by: orderSelect,
          languagecode: 'en-us',
          travel_purpose: 'leisure',
        }
      })
        .then(async response => {
          hotelList = response.data.result;
          this.hotels = [];
          for (let i in hotelList) {
            let currentHotel = hotelList[i];
            let displaystars = this.getHotelStars(hotelList[i].class);
            let stars = this.getAPIHotelStars(hotelList[i].class);
            currentHotel["stars"] = displaystars;
            currentHotel["emissions"] = await this.calculateHotelEmissions(stars);
            this.hotels.push(currentHotel);
          }
          this.showTable = true
          this.isLoading = false
        })
    },
    getAPIHotelStars(star) {
      if (star == 0 || star == 1) {
        star = 2;
      }
      return star + ' stars';
    },
    getHotelStars(stars) {
      if (stars >= 2 && stars <= 5) {
        return '★'.repeat(stars);
      } else {
        return '★'.repeat(2); 
      }
    },
    async calculateHotelEmissions(stars) {
      const url = 'https://carbonsutra1.p.rapidapi.com/hotel_estimate';
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
          'X-RapidAPI-Key': '0e578a0bd6mshd6db73d924875efp19b709jsnac99ae689b3f',
          'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com',
        },
        body: new URLSearchParams({
          country_code: 'ID',
          number_of_nights: this.noNights,
          number_of_rooms: this.roomNo,
          city_name: "Bali",
          hotel_rating: stars,
        }),
      };
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        let obj = JSON.parse(result);


        let carbonEmissions = obj.data.co2e_kg;
        return carbonEmissions
      } catch (error) {
        console.error(error);
        return 0
      }
    },
    sortTable(column) {
      if (column !== this.sortBy) {
        this.sortBy = column;
        this.sortDirection = "asc";
      }
      else {
        
        this.sortDirection = this.sortDirection == "asc" ? "desc" : "asc";
      }

      this.hotels.sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        if (this.sortDirection == "asc") {
          return aValue < bValue ? -1 : 1;
        } else {
          return aValue > bValue ? -1 : 1;
        }
      });
    }
  },
};
</script>

<style scoped>
table {
  font-family: Arial, sans-serif;
  text-align: center;
}

th, td {
  vertical-align: middle;
}

#searchInput {
  margin-top: 20px;
}

img {
  width: 100px
}

th {
  background-color: #007BFF;
  color: white;
}

tr {
  background-color: #f5f5f5;
}

tr:nth-child(even) {
  background-color: #e3e3e3;
}

a {
  color: white;
}

a:hover {
  text-decoration: none;
}

.custom {
  background-color: green;
}

.loading-animation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid #007BFF;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

th.sortable-header span {
  margin-left: 4px;
  font-size: 12px;
  vertical-align: middle;
}

.pick-container {
  display: flex;
  flex-direction: column;
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

/* Add some styles to the double-sided arrow to make it more prominent */

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
