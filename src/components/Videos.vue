<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half video-page">
                <h1>Videos</h1>
                <template v-for="video in videos.slice().reverse()">
                    <div class="resp-container">
                        <iframe class="resp-iframe" :src="video.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </template>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    computed: {
        videos() { return this.$store.getters.videos }
    }
}
</script>

<style lang="scss" scoped>
    .video-page {
        margin-bottom: 4em;
    }
    p {
        margin: 30px 0 10px;
    }
    .resp-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
        margin-bottom: 2em;
        .resp-iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
</style>
