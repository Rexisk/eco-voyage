<template>
  <section class="pick-section">
    <div class="container">
      <div class="pick-container">
        <div class="pick-container__title">
          <h2 style="margin-bottom: 1rem"><b>Bali's Rental Fleet</b></h2>
          <p>
            Choose from a variety of our eco-friendly vehicles to rent for your next
            adventure in Bali
          </p>
        </div>

        <div>
          <CarRentalCalendar ref="carRentalCalendarRef" @update-dates="handleDateChange" @date-missing="this.handleDateMissing()" @dates-valid="proceedWithReservation"/>
        </div>
        <div class="pick-container__car-content">
          <!-- Pick car buttons -->
          <div class='row'>
            <div class="col-lg-3 pick-box">
              <button :class="coloringButton('btn2')" @click="changeCar('Toyota Avanza', 'btn2')">
                Toyota Avanza
              </button>
              <button :class="coloringButton('btn3')" @click="changeCar('Toyota Kijang', 'btn3')">
                Toyota Kijang Innova
              </button>
              <button :class="coloringButton('btn4')" @click="changeCar('Toyota Innova', 'btn4')">
                Toyota Innova
              </button>
              <button :class="coloringButton('btn5')" @click="changeCar('Toyota Agya', 'btn5')">
                Toyota Agya
              </button>
            </div>
            <!-- Car -->

            <div class="col-lg-9 pick-car">
              <div v-if="carLoad" class="loader"></div>
              <img :src="require(`@/assets/${CAR_DATA[selectedCar].img}`)" alt="car_img" @load="setCarLoad(false)" />
            </div>


          </div>
          <!-- Description -->
          <div class="row">
            <div class="box-cars">
              <div class="col-lg-12 pick-description shadow">
                <div class="pick-description__price">
                  <span>${{ CAR_DATA[selectedCar].price }}</span>
                  <p>/ DAY</p>
                </div>
                <div class="pick-description__table">
                  <div class="pick-description__table__col">
                    <span>Model</span>
                    <span>{{ CAR_DATA[selectedCar].model }}</span>
                  </div>
                  <div class="pick-description__table__col">
                    <span>Mark</span>
                    <span>{{ CAR_DATA[selectedCar].mark }}</span>
                  </div>
                  <div class="pick-description__table__col">
                    <span>Year</span>
                    <span>{{ CAR_DATA[selectedCar].year }}</span>
                  </div>
                  <div class="pick-description__table__col">
                    <span>Seats</span>
                    <span>{{ CAR_DATA[selectedCar].doors }}</span>
                  </div>
                  <div class="pick-description__table__col">
                    <span>CO2 Emission</span>
                    <span>{{ CAR_DATA[selectedCar].co2Emission }}</span>
                  </div>
                  <div class="pick-description__table__col">
                    <span>Transmission</span>
                    <span>{{ CAR_DATA[selectedCar].transmission }}</span>
                  </div>
                  <div class="pick-description__table__col">
                    <span>Fuel</span>
                    <span>{{ CAR_DATA[selectedCar].fuel }}</span>
                  </div>
                </div>
                <!-- Button CTA -->
                <a class="cta-btn" @click="checkDatesAndReserve">Reserve Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  <CarCalculatorEmissions :co2Emission="computedCO2Emission" :carname="computedCarName" />
</template>

<script>
import CarCalculatorEmissions from "./CarCalculatorEmissions.vue";
import CarRentalCalendar from "./CarRentalCalendar.vue";
export default {
  components: {
    CarCalculatorEmissions,
    CarRentalCalendar,
  },
  data() {
    return {
      selectedCar: "Toyota Avanza",
      selectedScooter: "Scooter Model 1",
      carLoad: true,
      selectedTab: "car",
      fromDay: '',
      fromYear: '',
      fromMonth: '',
      toDay: '',
      toMonth: '',
      toYear: '',
    };
  },
  computed: {
    reserveNowUrl() {
      const baseUrl = 'https://cars.booking.com/search-results';
      const queryParams = new URLSearchParams({
        aid: '2311236',
        coordinates: '',
        cor: 'sg',
        doDay: this.toDay,
        doHour: '10',
        doMinute: '0',
        doMonth: this.toMonth,
        doYear: this.toYear,
        driversAge: '30',
        dropCoordinates: '',
        dropFtsType: 'C',
        dropLocation: '11311',
        dropLocationName: 'Bali',
        ftsType: 'C',
        label: 'en-row-booking-desktop-v0aqgtf3mjWbjFaAWHbxPAS652796017659:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-65526620:lp9062526:li:dec:dm',
        location: '11311',
        locationName: 'Bali',
        prefcurrency: 'SGD',
        preflang: 'en',
        puDay: this.fromDay,
        puHour: '10',
        puMinute: '0',
        puMonth: this.fromMonth,
        puYear: this.fromYear,
        locationIata: '',
        dropLocationIata: ''
      });
      return `${baseUrl}?${queryParams.toString()}`;
    },
    computedCO2Emission() {
      // Compute the CO2 emission value based on CAR_DATA[selectedCar]
      return this.CAR_DATA[this.selectedCar].co2Emission;
    },
    computedCarName(){
      return this.selectedCar;
    },
    CAR_DATA() {
      return {
        "Toyota Avanza": {
          price: "80 to $100 ",
          img: "toyotaavanza.jpeg",
          model: "Avanza",
          mark: "Toyota",
          year: "2020",
          doors: "7",
          air: "Yes",
          transmission: "Automatic",
          fuel: "Hybrid",
          co2Emission: 172
        },
        "Toyota Kijang": {
          price: "100 to $115",
          img: "kijang.jpeg",
          model: "Kijang",
          mark: "Toyota",
          year: "2007",
          doors: "7",
          air: "Yes",
          transmission: "Automatic",
          fuel: "Hybrid",
          co2Emission: 149
        },
        "Toyota Innova": {
          price: "100 to $115",
          img: "innova.png",
          model: "Innova",
          mark: "Toyota",
          year: "2022",
          doors: "7",
          air: "Yes",
          transmission: "Automatic",
          fuel: "Hybrid",
          co2Emission: 131.3
        },
        "Toyota Agya": {
          price: "60 to $75",
          img: "Toyota-Agya-1.jpg",
          model: "Agya",
          mark: "Toyota",
          year: "2021",
          doors: "5",
          air: "Yes",
          transmission: "Automatic",
          fuel: "Hybrid",
          co2Emission: 113,
        },
      };
    },
  },
  methods: {
    checkDatesAndReserve() {
        const datesFilled = this.$refs.carRentalCalendarRef.checkAndEmitDates();
        if (datesFilled) {
            this.proceedWithReservation();
        }
    },
    handleDateMissing() {
        if (!this.fromDate && !this.toDate) {
            alert("Please fill in the 'Book From' and 'To' date.");
        } else if (!this.fromDate) {
            alert("Please fill in the 'Book From' date.");
        } else if (!this.toDate) {
            alert("Please fill in the 'To' date.");
        }
    },
    proceedWithReservation() {
        if (this.reserveNowUrl && typeof this.reserveNowUrl === 'string') {
            window.location.href = this.reserveNowUrl;
        }
    },
    handleDateChange({ fromYearMonthDay, toYearMonthDay }) {
      this.fromDay = fromYearMonthDay.day;
      this.fromMonth = fromYearMonthDay.month;
      this.fromYear = fromYearMonthDay.year;
      this.toDay = toYearMonthDay.day;
      this.toMonth = toYearMonthDay.month;
      this.toYear = toYearMonthDay.year;
    },
    changeCar(carName, buttonID) {
      this.selectedCar = carName;
      this.colorBtn = buttonID;
    },
    changeScooter(scooterName, buttonID) {
      this.selectedScooter = scooterName;
      this.colorBtn = buttonID;
    },
    coloringButton(id) {
      return this.selectedCar === id || this.selectedScooter === id
        ? "colored-button"
        : "shadow car-btn";
    },
    setCarLoad(status) {
      this.carLoad = status;
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
.pick-section {
  padding-top: 2rem;
  padding-bottom: 4rem;
  background: white;
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

.pick-container__car-content {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

@media (max-width: 1400px) {
  .pick-container__car-content {
    flex-direction: column;
    gap: 5rem;
  }
}


.pick-box {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.pick-box button {
  font-weight: 600;
  border: none;
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: #e9e9e9;
  transition: all 0.2s;
  text-align: center;
}

.pick-box button:hover {
  background-color: #42b983;
  color: white;
}

.pick-car {
  width: 40rem;
  position: relative;
}

@media (max-width: 991px) {
  .pick-car {
    width: 100%;
  }
}

.pick-car img {
  width: 100%;
  margin-top: 4rem;
}

.pick-description {
  width: 25rem;
  border-radius: 10px;
  background: white;
}

.pick-description__price {
  width: 100%;
  background-color: #42b983;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: white;
  padding: 0.3rem 1rem;
  white-space: nowrap;
}

.pick-description__price span {
  font-size: 2.8rem;
  font-weight: 700;
}

.pick-description__table {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  font-size: 1.4rem;
}

.pick-description__table__col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  grid-template-rows: auto;
  padding: 0.4rem 0.5rem;
  border-bottom: 2px solid #706f7b;
  border-right: 2px solid #706f7b;
  border-left: 2px solid #706f7b;
}

.pick-description__table__col span:nth-child(1) {
  border-right: 2px solid #706f7b;
}

.cta-btn {
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  color: white;
  font-family: Arial, sans-serif;
  background-color: #42b983;
  padding: 1rem 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  transition: all 0.3s;
}

.cta-btn:hover {
  background-color: #e9381d;
}

.box-cars {
  gap: 1rem;
  display: flex;
  justify-content: space-between;
}

.car-btn {
  border-radius: 10px;
}

@media (max-width: 1200px) {
  .box-cars {
    gap: 2rem;
  }
}

@media (max-width: 700px) {
  .box-cars {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }
}

.colored-button {
  background-color: #42b983 !important;
  color: white;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #00000042;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 40%;
  right: 43%;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

</style>
