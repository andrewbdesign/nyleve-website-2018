<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half blog-container">
                <h1>Edit Bio</h1>
                <hr>
                <textarea></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        bio() {
            return this.$store.getters.bio
        }
    },
    data() {
        return {
            // maincopy: this.bio 
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
