<template>
    <h2> Sustainable Itinerary Planner</h2>
    <div class="card-group col-md-9 col-sm-12 mx-auto" id="card-deck">
        <a class="card m-2" id="card1" href="/accoms">
            <img src="../assets/QuickLinks/hotel.png" class="card-img-top" alt="hotels">
            <div class="card-body">
                <h5 class="card-title">Accomodations</h5>
            </div>
        </a>
        <a class="card m-2" id="card2" href="/location">
            <img src="../assets/QuickLinks/activities.png" class="card-img-top" alt="activities">
            <div class="card-body ">
                <h5 class="card-title ">Activities</h5>
            </div>
        </a>
        <a class="card m-2" id="card3" href="/rental">
            <img src="../assets/QuickLinks/vehicles.png" class="card-img-top" alt="vehicles">
            <div class="card-body">
                <h5 class="card-title">Eco-Vehicles</h5>
            </div>
        </a>
        <a class="card m-2" id="card4" href="/Offsetcarbon">
            <img src="../assets/QuickLinks/flights.png" class="card-img-top" alt="flights">
            <div class="card-body">
                <h5 class="card-title">Carbon Offset</h5>
            </div>
        </a>
    </div>
</template>


<style scoped>
h2 {
  padding: 30px 0px;
}

#card-deck{
    margin-bottom: 30px;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  flex-basis: calc(25% - 20px);
  margin-bottom: 20px;
}

.card img {
  width: 100px;
  margin: 0 auto;
  padding: 15px;
  padding-bottom: 0px;
}

.card-title {
  text-align: center;
}

#card1{
    border: 3px #B57373 solid;
    border-radius: 15px;
    text-decoration: none;
}

#card2{
    border: 3px #FFC12E solid;
    border-radius: 15px;
    text-decoration: none;
}

#card3{
    border: 3px #1AB35A solid;
    border-radius: 15px;
    text-decoration: none;
}

#card4{
    border: 3px #AD5DC9 solid;
    border-radius: 15px;
    text-decoration: none;
}
</style>