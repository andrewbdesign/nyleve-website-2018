<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column">
                BIO
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.bio-container {
    position: relative;
    margin: auto;
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 80px 26px;
    line-height: 1.5;
    margin-top: 143px;
    padding-bottom: 143px;
    h1 {
        margin: 0;
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    p {
        margin: 0;
        font-size: .9em;
        line-height: 1.8;
        margin-bottom: 20px;
    }
}
</style>
