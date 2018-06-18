<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half blog-container">
                <h1>Blog</h1>
                <hr>
                <div class="entry" v-for="blog in blogs.slice().reverse()">
                    <h2>{{ blog.title }}</h2>
                    <p class="date">{{ blog.date }}</p>
                    <img :src="blog.image" v-if="blog.image">
                    <p>{{blog.copy}}</p>
                    <hr>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    computed: {
        blogs() {
            return this.$store.getters.blogs
        }
    }
}

</script>

<style lang="scss">

.blog-container {
    .entry {
        h2 {
            font-size: 2em;
            font-weight: 700;
        }
        img {
            width: 100%;
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
