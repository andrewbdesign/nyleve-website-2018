<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column">
                <h1>Buy my EP</h1>
                <p>{{ title }}</p>
                <img src="../assets/ep-artwork.jpg" alt="">
            </div>
            <div class="column">
                <div class="work-container">
                    <div class="cta-section">
                        <h1>Tracklist:</h1>
                        <template v-for="(track, index) in tracks">
                            <p> {{index + 1}}. {{ track.track }}</p>
                        </template>
                        <button id="cta-button" class="button" type="button" name="button" @click="clickBuy">buy now</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        clickBuy() {
            window.open('https://www.google.com/')
        }
    },
    data() {
        return {
            title: 'An Empty Space Between',
            albumArt: 'http://via.placeholder.com/350x350',
            tracks: [
                {track: 'As It So Happens'},
                {track: 'An Empty Space Between'},
                {track: 'Lately & Afterwards'},
                {track: 'Again & Again'},
                {track: 'Lindfield'},
                {track: 'And So On'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .work-container p {
        margin-bottom: 0;
    }
    p {
        margin-bottom: 20px;
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
