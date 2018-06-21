<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div v-if="!isEditing" class="column is-half">
                <h1>BIO</h1><span v-if="userIsAuthenticated" @click="editBio" class="edit-btn button">Edit</span>
                <template v-for="bio in bio.split('\n')">
                    <p v-html="bio"></p>
                </template>
            </div>
            <div v-if="isEditing">
                <div class="column editor-bio">
                    <h1>Edit Bio</h1>
                    <form autocomplete="off" id="form" @submit.prevent="updateBio">
                        <textarea id="bio-copy" v-model="bioCopy"></textarea>
                        <input type="submit" value="Update" class="button" :disabled="!formIsValid"></button>
                        <span class="button" @click="cancelUpdate">Cancel</span>
                    </form>
                </div>
                <div class="column">
                    <h1>Preview</h1>
                    <p v-for="bio in bioCopy.split('\n')"> {{ bio }} </p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        userIsAuthenticated() {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        },
        formIsValid() {
            return this.bioCopy !== ''
        },
        bio() {
            return this.$store.getters.bio
        }
    },
    data() {
        return {
            bioCopy: '',
            isEditing: false
        }
    },
    methods: {
        editBio() {
            this.bioCopy = this.$store.getters.bio
            this.isEditing = true
        },
        updateBio() {
            let textObj = {
                body: this.bioCopy
            }
            this.$store.dispatch('updateBio', textObj)
            this.isEditing = false
        },
        cancelUpdate() {
            this.isEditing = false
        }
    }
}
</script>

<style lang="scss" scoped>

.editor-bio {
    input[type='text'] {
        max-width: 100%;
        display: block;
    }
    textarea {
        display: block;
        // max-width: 100%;
        min-width: 100%;
        margin-bottom: 20px;
        padding: 5px;
        height: 400px;
        min-height: 400px;
    }
    input {
        margin-bottom: 20px;
    }
}
p {
    margin-bottom: 20px;
}
</style>
