<template>
    <div class="home-page">
        <h1> {{ title }} </h1>
        <img src="../assets/ep-artwork.jpg" alt="">
        <div class="music-links">
            <a target="_blank" :href="links.spotify">Spotify</a> |
            <a target="_blank" :href="links.bandcamp">Bandcamp</a> |
            <a target="_blank" :href="links.itunes">Itunes</a> |
            <a target="_blank" :href="links.soundcloud">Soundcloud</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        title: 'An Empty Space Between',
        links: {
            spotify: 'http://spotify.com',
            bandcamp: 'http://bandcamp.com',
            itunes: 'http://itunes.com',
            soundcloud: 'http://soundcloud.com'
        }
        // albumArt: '../assets/ep-artwork.jpg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
    font-weight: bold;
    color: #fff;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

img {
    width: 290px;
    margin: 40px 0;
}

.music-links {
    color: #FFF;
    a {
        color: #FFF;
        text-decoration: none;
        font-style: italic;
        &:hover {
            color: #e2e2e2;
        }
    }
}
</style>
