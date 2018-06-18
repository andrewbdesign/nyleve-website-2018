<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column">
                <h1>Buy my EP</h1>
                <template v-for="album in albums">
                    <h2>{{ album.title }}</h2>
                    <img :src="album.image" alt="">
                    <template v-for="(track, index) in album.tracks">
                        <p> {{index + 1}}. {{ track.track }}</p>
                    </template>
                </template>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        albums() {
            return this.$store.getters.albums
        }
    },
    methods: {
        clickBuy() {
            window.open('https://www.google.com/')
        }
    }
}
</script>

<style lang="scss" scoped>
    .work-container p {
        margin-bottom: 0;
    }
    button {
        background: white;
        color: #000;
        transition: background .1s ease-in, color .1s ease-in;
        cursor: pointer;
        &:hover {
            background: #000;
            color: #FFF;
        }
    }
</style>
