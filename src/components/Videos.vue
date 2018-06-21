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
            <div class="column editor-video" v-if="userIsAuthenticated">
                <h2>Add video</h2>
                <form autocomplete="off" id="form" @submit.prevent="submitPost">
                    <label for="title">Video link</label>
                    <input id="title" type="text" v-model="videoLink">
                    <input type="submit" class="button" :disabled="!formIsValid"></button>
                </form>
                <hr>
                <h2>Preview</h2>
                <template v-if="videoLink">
                    <div class="resp-container">
                        <iframe class="resp-iframe" :src="videoLink" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </template>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    computed: {
        videos() { return this.$store.getters.videos },
        formIsValid() { return this.videoLink !== '' },
        userIsAuthenticated() { return this.$store.getters.user !== null && this.$store.getters.user !== undefined }
    },
    data() {
        return {
            videoLink: ''
        }
    },
    methods: {
        submitPost() {
            let videoObj = {
                url: this.videoLink
            }
            this.$store.dispatch('addVideo', videoObj)
            this.videoLink = ''
        }
    }
}
</script>

<style lang="scss" scoped>
    .editor-video {
        input[type='text'] {
            width: 100%;
            display: block;
        }
        input {
            margin-bottom: 20px;
        }
    }
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
