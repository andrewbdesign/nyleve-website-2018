<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half main-section">
                <h1>Listen</h1>
                <template v-for="work in works.slice().reverse()">
                    <hr>
                    <p>{{ work.title }}</p>
                    <span class="button" v-if="userIsAuthenticated" @click="editSong(work)">Edit</span>
                    <span class="button" v-if="userIsAuthenticated" @click="deleteSong(work)">Delete</span>
                    <div class="resp-container">
                        <iframe class="resp-iframe" :src="work.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </template>
            </div>
            <div class="column editor-video editor-section" v-if="userIsAuthenticated">
                <h2>Add video</h2>
                <form autocomplete="off" id="form" @submit.prevent="addSong">
                    <label for="title">Title</label>
                    <input id="title" type="text" v-model="title">

                    <label for="url">iframe URL</label>
                    <input id="url" type="text" v-model="url">
                    
                    <div v-if="isEditingSong">
                        <span class="button" @click="cancelEditSong()">Cancel</span>
                        <span class="button" @click="updateSong()">Update</span>
                    </div>
                    <div v-if="!isEditingSong">
                        <input type="submit" class="button" :disabled="!formIsValid"></button>
                    </div>
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
            url: '',
            id: '',
            isEditingSong: false
        }
    },
    methods: {
        editSong(song) {
            this.isEditingSong = true
            this.title = song.title
            this.url = song.url
            this.id = song.id
        },
        cancelEditSong() {
            this.isEditingSong = false
            this.title = ''
            this.url = ''
            this.id = ''
        },
        updateSong() {
            let songObj = {
                url: this.url,
                title: this.title,
                id: this.id
            }

            this.$store.dispatch('updateSong', songObj)

            this.isEditingSong = false
            this.title = ''
            this.url = ''
            this.id = ''
        },
        deleteSong(song) {
            let songObj = {
                id: song.id
            }
            this.$store.dispatch('deleteSong', songObj)
            this.isEditingSong = false
            this.title = ''
            this.url = ''
            this.id = ''
        },
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

.button {
    margin-bottom: 20px;
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
