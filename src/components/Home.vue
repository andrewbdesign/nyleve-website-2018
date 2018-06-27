<template>
    <div class="home-section">
        <h1 v-html="title"></h1>
        <img class="ep-artwork" src="../../static/ep-artwork.jpg" alt="">
        <div class="social-links">
            <a href="" target="_blank">Spotify</a> |
            <a href="" target="_blank">Bandcamp</a> |
            <a href="" target="_blank">Itunes</a> |
            <a href="" target="_blank">Soundcloud</a>
        </div>
        <router-link to="/blog" class="button website-btn">Continue to Main site</router-link>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        title: 'An Empty Space Between'
    }
  },
  mounted() {
      intro()
  }
}

function intro() {
    let tl = new TimelineMax()
    let ease = 'Power1.easeOut'
    TweenMax.set('.ep-artwork, .social-links, .home-section .button', {y:-10})
    tl.to('.home-section h1', 1, {autoAlpha:1,  ease, delay:.2})
    tl.to('.ep-artwork', 1, {autoAlpha:1, y:0, ease}, '.3')
    tl.to('.social-links', 1, {autoAlpha:1,  y:0, ease}, '.6')
    tl.to('.home-section .button', 1, {autoAlpha:1, y:0, ease}, '.8')
}

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lora');
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700');
body {
    width: 100%;
}
.ep-artwork {
    width: 280px;
    margin: 30px 0 10px;
}
.social-links a{
    font-style: italic;
    display: inline-block;
    color: #fff;
    font-size: 20px;
    margin: 10px 12px 20px;
    letter-spacing: 1.1px;
}
.website-btn {
    font-family: 'Markazi Text', serif;
    font-size: 21px;
    background: transparent;
    color: #fff;
    border-radius: 0;
    padding: 20px 62px;
    border: 1px solid #fff;
    margin-top: 40px;
}
.home-section {
    padding: 50px 0;
    color: #fff;
    background-image: url('../../static/landingpage-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    margin: auto;
    display: inline-block;
    h1 {
        font-family: 'Lora', serif;
        // font-family: 'Markazi Text', serif;
        font-size: 3em;
        margin: 0 auto;
        font-weight: 300;
        letter-spacing: .3px;
        color:#fff;
    }
    p {
        font-family: 'Open Sans', sans-serif;
        padding: 1em 0 2em;
        margin: 0;
        text-align: center;
    }
    h1, p, .button, .ep-artwork, .social-links {
        opacity: 0;
    }
    text-align: center;
}

h1 {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
}
</style>
