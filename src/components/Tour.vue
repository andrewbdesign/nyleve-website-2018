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

                    <span class="button" v-if="userIsAuthenticated" @click="editTour(tour)">Edit</span>
                    <span class="button" v-if="userIsAuthenticated" @click="deleteTour(tour)">Delete</span>
                    <hr>
                </template>
            </div>
            <div class="column editor-section" v-if="userIsAuthenticated">
                <h2><span v-if="!isEditingTour">Add</span><span v-if="isEditingTour">Edit</span> tour</h2>
                <form autocomplete="off" id="form" @submit.prevent="submitTour">
                    
                    <label for="title">Tour title</label>
                    <input id="title" type="text" v-model="title">
                    
                    <label for="date">Date</label>
                    <input id="date" type="text" v-model="date">

                    <label for="description">Tour description</label>
                    <input id="description" type="text" v-model="description">


                    <label for="date">URL</label>
                    <input id="date" type="text" v-model="url">

                    <label for="rsvp">RSVP</label>
                    <input id="rsvp" type="text" v-model="rsvp">

                    <div v-if="isEditingTour">
                        <span class="button" @click="cancelEditTour">Cancel</span>
                        <span class="button" @click="updateTour">Update</span>
                    </div>
                    <div v-if="!isEditingTour">
                        <input type="submit" class="button" :disabled="!formIsValid"></button>
                    </div>
                </form>
                <hr>
                <h2>Preview</h2>
                <h2> {{ title }} </h2>
                <p class="dates"> {{ date }} </p>
                <p> {{ description }} </p>

                <a class="button" v-if="url" :href="url" target="_blank">TICKETS</a>
                <a class="button" v-if="rsvp" :href="rsvp" target="_blank">RSVP</a>
                <hr>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        tours() {
            return this.$store.getters.tours
        },
        formIsValid() {
            return this.title !== '' && this.description !== '' && this.date !== '' && this.url !== '' && this.rsvp !== ''
        },
        userIsAuthenticated() { return this.$store.getters.user !== null && this.$store.getters.user !== undefined }
    },
    methods: {
        submitTour() {
            this.isEditingTour = false
            const tourObj = {
                title: this.title,
                description: this.description,
                date: this.date,
                url: this.url,
                rsvp: this.rsvp
            }
            this.$store.dispatch('addTour', tourObj)
            this.title = ''
            this.description = ''
            this.date = ''
            this.url = ''
            this.rsvp = ''
        },
        editTour(tour) {
            // console.log(tour)
            this.isEditingTour = true
            this.id = tour.id
            this.title = tour.title
            this.description = tour.description
            this.date = tour.date
            this.url = tour.url
            this.rsvp = tour.rsvp
        },
        cancelEditTour() {
            this.isEditingTour = false
            this.id = ''
            this.title = ''
            this.description = ''
            this.date = ''
            this.url = ''
            this.rsvp = ''
        },
        updateTour() {
            const tourObj = {
                id: this.id,
                url: this.url,
                rsvp: this.rsvp,
                title: this.title,
                description: this.description,
                date: this.date,
            }
            this.$store.dispatch('updateTour', tourObj)

            this.isEditingTour = false
            this.id = ''
            this.title = ''
            this.description = ''
            this.date = ''
            this.url = ''
            this.rsvp = ''
        },
        deleteTour(tour) {
            // console.log(tour)
            let tourObj = {
                id: tour.id
            }
            this.$store.dispatch('deleteTour', tourObj)
            this.isEditingTour = false
            this.id = ''
            this.title = ''
            this.description = ''
            this.date = ''
            this.url = ''
            this.rsvp = ''
        }
    },
    data() {
        return {
            isEditingTour: false,
            title: '',
            description: '',
            date: '',
            url: '',
            rsvp: '',
            id: ''
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
// .editor-video {
input[type='text'] {
    width: 100%;
    display: block;
}
input {
    margin-bottom: 20px;
}
// }
</style>
