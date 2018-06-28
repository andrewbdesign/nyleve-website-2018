<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half blog-container main-section">

                <template v-if="!editingPost">
                    <h1>Blog</h1>
                    <hr>
                    <div class="entry" v-for="blog in blogs.slice().reverse()" :key="blog.id">
                        <span class="button" v-if="userIsAuthenticated" @click="editPost(blog)">Edit</span>
                        <span class="button" v-if="userIsAuthenticated" @click="deletePost(blog)">Delete</span>
                        <h2>{{ blog.title }}</h2>
                        <p class="date">{{ blog.date }}</p>
                        <img :src="blog.image" v-if="blog.image">
                        <div class="resp-container" v-if="blog.iframeUrl">
                            <iframe class="resp-iframe" :src="blog.iframeUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                        <template v-for="copy in blog.copy.split('\n')">
                            <p> {{ copy }}</p>
                        </template>
                        <hr>
                    </div>
                </template>
                <template v-if="editingPost">
                    <div class="columns">
                        <div class="column is-half">
                            <h1>Edit post</h1>
                            <form autocomplete="off" id="form" @submit.prevent="updatePost">
                                <label for="title">Title</label>
                                <input id="title" type="text" v-model="editBody.title">
                                
                                <label for="date">Date</label>
                                <input id="date" type="text" v-model="editBody.date">

                                <label for="iframe">iframe URL</label>
                                <input id="iframe" type="text" v-model="editBody.iframeUrl">
                                
                                <input 
                                    type="file" 
                                    style="display: none" 
                                    ref="fileInput" 
                                    accept="image/*"
                                    @change="onFilePicked">
                                <label for="image">Image (optional)</label>
                                <button class="button img-btn" @click="onPickFile">Upload Image</button>

                                <label for="body">Copy</label>
                                <textarea id="body" v-model="editBody.copy"></textarea>
                                
                                <input type="submit" class="button" :disabled="!formIsValid">
                                <span class="button" @click="cancelEditPost">Cancel</span>
                            </form>
                        </div>
                        <div class="column blog-container">
                            <h3>Preview</h3>
                            <div class="entry">
                                <h2>{{ editBody.title }}</h2>
                                <p class="date">{{ editBody.date }}</p>
                                <img :src="editBody.image" v-if="editBody.image" width="100%">
                                <div class="resp-container" v-if="editBody.iframeUrl">
                                    <iframe class="resp-iframe" :src="editBody.iframeUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                                <template v-for="copy in editBody.copy.split('\n')">
                                    <p> {{ copy }}</p>
                                </template>
                            </div>
                        </div>
                    </div>
                </template>
                
            </div>
        </div>
  </div>
</template>

<script>

export default {
    computed: {
        userIsAuthenticated() { return this.$store.getters.user !== null && this.$store.getters.user !== undefined },
        blogs() {
            return this.$store.getters.blogs
        },
        formIsValid() {
            return this.editBody.title !== '' && 
                   this.editBody.date !== '' && 
                   this.editBody.copy !== ''
        }
    },
    data() {
        return {
            editingPost: false,
            editBody: {
                title: '',
                date: '',
                copy: '',
                id: '',
                image: '',
                iframeUrl: ''
            },
            imageFile: null
        }
    },
    methods: {
        cancelEditPost() {
            this.editingPost = false
            this.editBody.id = ''
            this.editBody.title = ''
            this.editBody.date = ''
            this.editBody.copy = ''
            this.editBody.image = ''
        },
        editPost(post) {
            this.editingPost = true
            this.editBody.id = post.id
            this.editBody.title = post.title
            this.editBody.date = post.date
            this.editBody.copy = post.copy
            this.image = post.image
            this.editBody.iframeUrl = post.iframeUrl
            console.log(post)
        },
        deletePost(post) {
            this.$store.dispatch('deletePost', post)
        },
        onFilePicked(e) {
            const files = e.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid image')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.editBody.image = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imageFile = files[0]
        },
        onPickFile(e) {
            e.preventDefault()
            this.$refs.fileInput.click()
        },
        updatePost() {
            let editPost = {
                title: this.editBody.title,
                date: this.editBody.date,
                copy: this.editBody.copy,
                id: this.editBody.id,
                iframeUrl: this.editBody.iframeUrl
            }

            if (this.imageFile) {
                editPost.image = this.imageFile
            }
            console.log('updating editPost', editPost)
            this.$store.dispatch('updatePost', editPost)
            this.editBody.copy = ''
            this.editBody.date = ''
            this.editBody.id = ''
            this.editBody.iframeUrl = ''
            this.editBody.title = ''
            this.imageFile = null
            this.editingPost = false
        }
    }
}

</script>

<style lang="scss">
.button {
    line-height: 0;
}

input, textarea {
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #e2e2e2;
    padding: 5px;
}

.img-btn {
    display: block;
    margin-bottom: 30px;
}

.blog-container {
    .entry {
        h2 {
            font-size: 2em;
            font-weight: 700;
        }
        img {
            width: 100%;
        }
        p {
            margin-top: .75em;
        }
    }
    .date {
        font-size: 0.8em;
        margin-bottom: 60px;
        font-style: italic;
    }
    hr {
        background: #000;
        height: 1px;
        margin: 80px 0 40px;
    }
}

</style>
