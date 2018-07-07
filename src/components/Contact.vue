<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half main-section">
                <h1>Contact</h1>

                <a v-if="epk.facebook" target="_blank" :href="epk.facebook">Facebook</a> <span v-if="epk.soundcloud">|</span>
                <a v-if="epk.soundcloud" target="_blank" :href="epk.soundcloud">Soundcloud</a> <span v-if="epk.bandcamp">|</span>
                <a v-if="epk.bandcamp" target="_blank" :href="epk.bandcamp">Bandcamp</a> <span v-if="epk.spotify">|</span>
                <a v-if="epk.spotify" target="_blank" :href="epk.spotify">Spotify</a> <span v-if="epk.youtube">|</span>
                <a v-if="epk.youtube" target="_blank" :href="epk.youtube">Youtube</a>
                <br>
                <br>
                <a class="email" href="mailto:nylevecontact@gmail.com"> {{ email }} </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        epk() {
            return this.$store.getters.epk
        }
    },
    data() {
        return {
            email: 'nylevecontact@gmail.com'
        }
    }
}
</script>

<style lang="scss" scoped>

h1 {
    font-family: 'Source Serif Pro', serif;
    font-size: 3em;
    font-weight: 700;
    margin: 0;
    margin-bottom: 30px;
    color: #000;
}
.contact-container {
    position: relative;
    margin: auto;
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 80px 26px;
    line-height: 1.5;
    top: 143px;
    h1 {
        margin: 0;
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    p {
        margin: 0;
        font-size: .9em;
        line-height: 1.8;
    }
    a {
        font-size: .9em;
        line-height: 1.8;
        color: #fff;
        text-decoration: none;
        &:hover {
            color: #e2e2e2;
        }
    }
    .email {
        display: block;
        margin-bottom: 30px;
    }
    .input-name,
    .input-email {
        width: 190px;
        height: 18px;
        margin-top: 10px;
        border: none;
        padding: 6px;
        margin-right: 5px;
    }
    .signup-btn {
        display: block;
        margin-top: 20px;
        width: 120px;
        height: 30px;
        border: none;
        background: #fff;
    }

    .indicates-required {
      font-size: 13px;
    }
}
</style>
