<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half">
                <h1>BIO</h1>
                <p v-for="(copy, index) in bio">{{bio[index]}}</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    computed: {
        bio() { 
            var bodyCopy = this.$store.getters.bio 
            bodyCopy = bodyCopy.split(/[\r\n]+/g)
            return bodyCopy
        }
    }
}
</script>

<style lang="scss" scoped>

p {
    margin-bottom: 20px;
}
</style>
