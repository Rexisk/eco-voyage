<template>
  <div id="emissions-calculator" class="container-fluid">
    <div class="row">
      <div class="col-lg"></div>
      <div class="col-xs-12 col-lg-6 col-md-6">
        <div id="map"></div>
      </div>
      <div class="col-xs-12 col-lg-4 col-md-6 d-flex align-items-center justify-content-center">
        <div class="panel-container">
          <div id="location-form">
            <h3>Emissions Calculator</h3>
            <div class="form-input">
              <label for="fromLocation">From</label>
              <div class="input-container">
                <input v-model="fromLocation" type="text" id="fromLocation" placeholder="Enter from location" />
                <div class="search-icon"></div>
              </div>
            </div>
            <div class="form-input">
              <label for="toLocation">To</label>
              <div class="input-container">
                <input v-model="toLocation" type="text" id="toLocation" placeholder="Enter to location" />
                <div class="search-icon"></div>
              </div>
            </div>

            <button class="btn btn-success" @click="CarEmissions">
              <b>Calculate Emissions</b>
            </button>
            <button class="btn btn-outlined-secondary" @click="clearForm">
              <b>Clear</b>
            </button>
            <div v-if="avgEmi || caremissions">
              <p class="co2-saved">
                <span class="text-success" style="font-size: 48px">
                  {{ save }}</span>% CO2 emissions saved
              </p>
              <div class="divider"></div>
              <div class="details">
                <h4>Emissions:</h4>
                <p class="text-success">
                  {{ carname }} CO2 Emission:
                  <span class="text-success">
                    <b>{{ caremissions }}</b>
                  </span>
                </p>
                <p class="text-danger">
                  Average Petrol Car:
                  <span class="text-danger">
                    <b>{{ avgEmi }}</b>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  co2Emission: Number,
  carname: String,
},
  data() {
    return {
      map: null,
      directionsService: null,
      directionsDisplay: null,
      geocoder: null,
      fromAutocomplete: null,
      toAutocomplete: null,
      fromMarker: null,
      toMarker: null,
      fromLocation: "",
      toLocation: "",
      caremissions: null,
      avgEmi: null, 
      save: null, 
    };
  },
  mounted() {
    this.loadGoogleMaps(() => {
      this.initMap();
    });
  },
  methods: {
    loadGoogleMaps(callback) {
      if (window.google) {
        callback();
      } else {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAzhn8LHxt5g8hdqo6ITsvKI1NUKzYMNBg&callback=initMap&libraries=places`; // Replace YOUR_API_KEY with your actual API key
        script.onload = callback;
        document.body.appendChild(script);
      }
    },

    initMap() {
      this.map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -8.409518, lng: 115.188916 },
        zoom: 9,
      });

      this.directionsService = new window.google.maps.DirectionsService();
      this.directionsDisplay = new window.google.maps.DirectionsRenderer();
      this.directionsDisplay.setMap(this.map);

      this.geocoder = new window.google.maps.Geocoder();

      this.fromAutocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById("fromLocation"),
        {
          componentRestrictions: { country: "ID" },
        }
      );
      

      this.toAutocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById("toLocation"),
        {
          componentRestrictions: { country: "ID" },
        }
      );

      // FOR ADDING
      this.fromAutocomplete.addListener("place_changed", () => {
        const place = this.fromAutocomplete.getPlace();
        if (place.geometry) { 
          this.fromLocation = place.formatted_address || place.name;
          this.updateMap();
        }
      });

      this.toAutocomplete.addListener("place_changed", () => {
        const place = this.toAutocomplete.getPlace();
        if (place.geometry) { 
          this.toLocation = place.formatted_address || place.name;
          this.updateMap();
        }
      });
      
      // FOR REMOVING
      document.getElementById("fromLocation").addEventListener("input", () => {
        if (document.getElementById("fromLocation").value == "") {
          this.updateMap();
          this.directionsDisplay.set("directions", null);
        }
      });

      document.getElementById("toLocation").addEventListener("input", () => {
        if (document.getElementById("toLocation").value == "") {
          this.updateMap();
          this.directionsDisplay.set("directions", null);
        }
      });
    },

    clearForm() {
      this.fromLocation = "";
      this.toLocation = "";
      this.directionsDisplay.set("directions", null);
      this.caremissions = null;
      this.avgEmi = null;
      this.save = null;
      this.map.setCenter({ lat: -8.409518, lng: 115.188916 });
      this.map.setZoom(9);
    },
    updateMap() {
      let fromLocation = this.fromLocation;
      let toLocation = this.toLocation;

      if (fromLocation && toLocation) {
        this.calculateDistance(() => {
          this.map.fitBounds(
            this.directionsDisplay.getDirections().routes[0].bounds
          );
        });
      } else if (fromLocation) {
        this.geocodeAddress(fromLocation, (fromLatLng) => {
          this.map.setCenter(fromLatLng);
          this.map.setZoom(15);
        });
      } else if (toLocation) {
        this.geocodeAddress(toLocation, (toLatLng) => {
          this.map.setCenter(toLatLng);
          this.map.setZoom(15);
        });
      } else {  
        this.clearForm()
      }
    },
    calculateDistance(callback) {
      const fromLocation = this.fromLocation;
      const toLocation = this.toLocation;

      this.geocodeAddress(fromLocation, (fromLatLng) => {
        this.geocodeAddress(toLocation, (toLatLng) => {
          this.calculateRoute(fromLatLng, toLatLng, (distance) => {
            callback(distance); // Pass the distance to the callback function
          });
        });
      });
    },
    geocodeAddress(address, callback) {
      this.geocoder.geocode({ address: address }, (results, status) => {
        // console.log({ results, status });
        if (status === "OK" && results[0].geometry.location) {
          const location = results[0].geometry.location;
          callback(location);
        } else {
          alert(
            "Geocoding was not successful for the following reason: " + status
          );
        }
      });
    },
    calculateRoute(fromLatLng, toLatLng, callback) {
      const request = {
        origin: fromLatLng,
        destination: toLatLng,
        travelMode: "DRIVING",
      };

      this.directionsService.route(request, (result, status) => {
        if (status == "OK") {
          this.directionsDisplay.setDirections(result);
          const distanceText = result.routes[0].legs[0].distance.text;
          const distanceNumeric = parseFloat(distanceText);
          callback(distanceNumeric);
        } else {
          alert("Directions request failed due to " + status);
        }
      });
    },


    CarEmissions() {
      // Calculate the distance
      this.calculateDistance(async (travel) => {
      // Calculate emissions based on CO2 emission prop
      const caremissions = this.co2Emission * travel;
      const avgEmi = 192 * travel;
      let save = ((avgEmi - caremissions) / avgEmi) * 100;
      save = save.toFixed(2);

      this.caremissions = caremissions.toFixed(2);
      this.avgEmi = avgEmi.toFixed(2);
      this.save = save;
      });
    },
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  .d-flex.align-items-center.justify-content-center {
    padding-top: 2.5rem;
  }
}
#map {
  height: 100%;
  min-height: 500px;
}
#emissions-calculator {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 16px;
}

.map-container {
  flex: 1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.panel-container {
  width: 350px;  
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
}

.panel {
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 16px;
  margin-right: 16px;
}

.form-input label {
  text-align: left;
}
.input-container {
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background: white;
}

.input-container input {
  flex: 1;
  border: none;
  padding: 10px;
  margin-left: 5px;
}

.search-icon {
  width: 24px; /* Adjust the size of the search icon */
  height: 24px;
  background-image: url("~@/assets/search.png"); /* Add the path to your search icon image */
  background-size: cover;
}

.co2-saved {
  font-weight: bold;
  margin-top: 10px;
}

.divider {
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

.details {
  margin: 0 20px;
  background: white;
  border-radius: 10px;
  padding: 8px;
}
</style>


