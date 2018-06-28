<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-two-quarters main-section">
                <h1>Create new post</h1>
                <form autocomplete="off" id="form" @submit.prevent="submitPost">
                    <label for="title">Title</label>
                    <input id="title" type="text" v-model="blogPost.title">
                    
                    <label for="date">Date (it is {{ todaysDate }})</label>
                    <input id="date" type="text" v-model="blogPost.date">

                    <label for="image">Image (optional)</label>
                    <button class="button img-btn" @click="onPickFile">Upload Image</button>
                    <input 
                        type="file" 
                        style="display: none" 
                        ref="fileInput" 
                        accept="image/*"
                        @change="onFilePicked">

                    <label for="iframe-url">iframe URL(optional)</label>
                    <input id="iframe-url" type="text" v-model="blogPost.iframeUrl">
                    
                    <label for="body">Copy</label>
                    <textarea id="body" v-model="blogPost.copy"></textarea>
                    
                    
                    
                    <input type="submit" class="button" :disabled="!formIsValid">Upload new post</button>
                </form>
            </div>

            <div class="column blog-container">
                <h3>Preview</h3>
                <div class="entry">
                    <h2>{{ blogPost.title }}</h2>
                    <p class="date">{{ blogPost.date }}</p>
                    <img :src="blogPost.image" v-if="blogPost.image" width="100%">
                    <div class="resp-container" v-if="blogPost.iframeUrl">
                        <iframe class="resp-iframe" :src="blogPost.iframeUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                    <template v-for="(copy, index) in bio">
                        <p v-html="bio[index]"></p>
                    </template>
                </div>
            </div>

        </div>
  </div>
</template>

<script>
const dateIs = new Date(); 
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const todaysDate = `${month[dateIs.getMonth()]} ${dateIs.getDate()}, ${dateIs.getFullYear()}`


export default {
    data () {
        return {
            blogPost: {
                title: '',
                date: '',
                copy: '',
                image: '',
                iframeUrl: ''
            },
            imageFile: null,
            todaysDate: month[dateIs.getMonth()] + ' ' + dateIs.getDate() + ', ' + dateIs.getFullYear()
        }
    },
    computed: {
        formIsValid() {
            return this.blogPost.title !== '' && 
                   this.blogPost.date !== '' && 
                   this.blogPost.copy !== ''
        },
        bio() { 
            var bodyCopy = this.blogPost.copy
            bodyCopy = bodyCopy.split(/[\r\n]+/g)
            return bodyCopy
        }

    },
    methods: {
        onFilePicked(e) {
            const files = e.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid image')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.blogPost.image = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.imageFile = files[0]
        },
        onPickFile(e) {
            e.preventDefault()
            this.$refs.fileInput.click()
        },
        submitPost() {
            let newPost = {
                title: this.blogPost.title,
                date: this.blogPost.date,
                copy: this.blogPost.copy,
                image: this.imageFile,
                iframeUrl: this.blogPost.iframeUrl
            }
            this.$store.dispatch('createPost', newPost)
            this.blogPost.title = ''
            this.blogPost.date = ''
            this.blogPost.copy = ''
            this.imageFile = null
            this.$router.push('/blog')
        }
    }
}
</script>

<style lang="scss" scoped>
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
.button {
    line-height: 0;
}

textarea {
    max-width: 100%;
    min-width: 100%;
    min-height: 150px;
}


.blog-container {
    background: #f4f4f4;
    h3 {
        font-size: 30px;
    }
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
