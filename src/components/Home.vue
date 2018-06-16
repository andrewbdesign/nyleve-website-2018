<template>
    <div class="home-section">
        <h1 v-html="title"></h1>
        <p>Available now</p>
        <router-link to="/blog" class="button">Continue to Main site</router-link>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        title: 'EMPTY SPACE<br>BETWEEN EP'
    }
  },
  mounted() {
      intro()
  }
}

function intro() {
    let tl = new TimelineMax()
    let ease = 'Power1.easeOut'
    tl.to('.home-section h1', 1, {autoAlpha:1, ease})
    tl.to('.home-section p', 1, {autoAlpha:1, ease})
    tl.to('.home-section .button', 1, {autoAlpha:1, ease})
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Shadows+Into+Light');
.home-section {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    margin: auto;
    display: inline-block;
    width: 370px;
    height: 351px;
    h1 {
        font-family: 'Shadows Into Light', cursive;
        font-size: 4em;
        margin: 0 auto;
    }
    p {
        font-family: 'Open Sans', sans-serif;
        padding: 1em 0 2em;
        margin: 0;
        text-align: center;
    }
    h1, p, .button  {
        opacity: 0;
    }
    text-align: center;
}
</style>
