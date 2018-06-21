<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half">
                <h1>Listen</h1>
                <template v-for="work in works">
                    <hr>
                    <p>{{ work.title }}</p>
                    <div class="resp-container">
                        <iframe class="resp-iframe" :src="work.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </template>
            </div>
            <div class="column editor-video" v-if="userIsAuthenticated">
                <h2>Add video</h2>
                <form autocomplete="off" id="form" @submit.prevent="addSong">
                    <label for="title">Title</label>
                    <input id="title" type="text" v-model="title">

                    <label for="url">iframe URL</label>
                    <input id="url" type="text" v-model="url">
                    <input type="submit" class="button" :disabled="!formIsValid"></button>
                </form>
                <hr>
                <h2>Preview</h2>
                <p>{{ title }}</p>
                <template v-if="url">
                    <div class="resp-container">
                        <iframe class="resp-iframe" :src="url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </template>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        works() { return this.$store.getters.works },
        formIsValid() { return this.title !== '' || this.url !== '' },
        userIsAuthenticated() { return this.$store.getters.user !== null && this.$store.getters.user !== undefined }
    },
    data() {
        return {
            title: '',
            url: ''
        }
    },
    methods: {
        addSong() {
            let songObj = {
                url: this.url,
                title: this.title
            }
            this.$store.dispatch('addSong', songObj)
            this.url = ''
            this.title = ''
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
h1 {
    margin-bottom: 0;
}

p {
    margin-bottom: 20px;
}

hr {
    background: #000;
    height: 1px;
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
