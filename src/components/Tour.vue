<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half main-section">
                <h1>Upcoming Shows</h1>
                <template v-for="tour in tours.slice().reverse()">
                    <h2> {{ tour.title }} </h2>
                    <p class="dates"> {{ tour.date }} </p>
                    <p> {{ tour.description }} </p>

                    <a class="button" :href="tour.url" target="_blank">TICKETS</a>
                    <a class="button" :href="tour.rsvp" target="_blank">RSVP</a>
                    <hr>
                </template>
            </div>
            <div class="column editor-section">
                <h1>Upcoming Shows</h1>
                <!-- <template v-for="tour in tours.slice().reverse()">
                    <h2> {{ tour.title }} </h2>
                    <p class="dates"> {{ tour.date }} </p>
                    <p> {{ tour.description }} </p>

                    <a class="button" :href="tour.url" target="_blank">TICKETS</a>
                    <a class="button" :href="tour.rsvp" target="_blank">RSVP</a>
                </template> -->
            </div>
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        tours() {
            return this.$store.getters.tours
        }
    }
}
</script>

<style lang="scss" scoped>
h2 {
    margin-bottom: 0;
    font-size: 30px;
    font-weight: 700;
    color: #000;
}
p {
    color: #000;
}
.button {
    margin-top: 20px;
}
.dates {
    font-weight: 700;
}
</style>
