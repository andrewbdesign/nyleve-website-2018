<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half main-section">
                <h1>Tours</h1>
                <template v-for="tour in tours.slice().reverse()">
                    <p> {{ tour.title }} </p>
                    <p> {{ tour.description }} </p>
                    <p> {{ tour.date }} </p>
                    <p> {{ tour.url }} </p>
                    <p> {{ tour.rsvp }} </p>
                </template>
                <!-- <p>{{ tours }}</p> -->
                <!-- <router-link to="/blog">Click here to go home?</router-link> -->
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

<style lang="css">
</style>
