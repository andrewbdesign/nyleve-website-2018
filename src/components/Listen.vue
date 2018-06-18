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
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        works() { return this.$store.getters.works }
    }
}
</script>

<style lang="scss" scoped>
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
