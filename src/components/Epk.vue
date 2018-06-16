<template>
    <div class="home-page">
        <h1> {{ title }} </h1>
        <div class="press-shot-crop" :style="{ 'background-image': 'url(' + pressCoverImage + ')' }"></div>
        <div class="body-epk">
          <div class="download-links">Download a high-resolution (PRINT) press shot <a :href="printShot" target="_blank">HERE</a> <div class="divider">|</div> <br class="download-br"> Download a high-resolution (WEB) press shot <a :href="webShot" target="_blank">HERE</a> </div>

              <div class="container">
                <h3>Latest Release</h3>
                <div class="artwork">
                  <img src="../assets/ep-artwork.jpg" alt="">
                </div>
                <div class="description">
                  <h1> {{ articleTitle }} </h1>
                  <p> {{ articleBody }} </p>
                  <!-- <div class="music-links">
                      <a target="_blank" :href="links.spotify">Spotify</a> |
                      <a target="_blank" :href="links.bandcamp">Bandcamp</a> |
                      <a target="_blank" :href="links.itunes">Itunes</a> |
                      <a target="_blank" :href="links.soundcloud">Soundcloud</a>
                  </div> -->
                </div>

                <div class="clear"></div>
              </div>

        </div>
        <!-- <div class="intrinsic-container intrinsic-container-16x9"> -->
          <!-- <iframe src="https://open.spotify.com/embed/album/3qzmmmRmVBiOuMvrerfW4z" frameborder="0" allowtransparency="true"></iframe> -->
          <iframe width="100%" height="450" scrolling="yes" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/359882759%3Fsecret_token%3Ds-C7uUO&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        <!-- </div> -->

        <div class="body-epk epk-02">
              <div class="container">
                <h3> {{ bioTitle }} </h3>
                <p> {{ bioIntro }} </p>
                <span @click="showBody" v-if="!isShowingFullBody">Read more.</span>

                <div v-if="isShowingFullBody">
                  <!-- <p v-for="paragraph in paragraphs"> {{ paragraph.paragraph }} </p> -->
                </div>
              </div>

        </div>

    </div>
</template>

<script>
export default {
  name: 'EPK',
  data () {
    return {
        title: 'EPK',
        articleTitle: epk.title,
        articleBody: epk.body,
        bioTitle: epk.bioTitle,
        bioIntro: epk.bioIntro,
        printShot: epk.printPhotoShot,
        webShot: epk.webPhotoShot,
        pressCoverImage: epk.coverShot,
        links: {
            spotify: 'http://spotify.com',
            bandcamp: 'http://bandcamp.com',
            itunes: 'http://itunes.com',
            soundcloud: 'http://soundcloud.com'
        },
        paragraphs: epk.paragraphs,
        isShowingFullBody: false
    }
  },
  methods: {
    showBody() {
      this.isShowingFullBody = true
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
.download-br {
  display: none;
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

.press-shot-crop {
  // background-image: url('../assets/ep-artwork.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 282px;
}
.body-epk {
  background: white;
  width: 100%;
  color: #000;
  // height: 300px;
}
.download-links {
  color: #000;
  font-size: 10px;
  padding: 10px 0;
  a {
    color: #FF0000;
    text-decoration: none;
  }
}

.container {
  width: 90%;
  margin: 0 auto;
}

h3 {
  text-align: left;
}

.artwork {
  width: 30%;
  display: inline-block;
  img {
    width: 100%;
    margin-top: 0;
  }
}
.clear {
  clear: both;
}
.title {
  text-align: left;
  width: 40%;
  margin-left: 40px;
}
.description {
  float: left;
  width: 70%;
  color: #000;
  h1 {
    color: #000;
    font-size: 19px;
    line-height: 0;
    margin-bottom: 30px;
    text-align: left;
    padding: 0 20px;
  }
  p {
    text-align: left;
    line-height: 26px;
    font-size: 13px;
    padding: 0 20px;
  }
}
.music-links {
    color: #000;
    a {
        color: #000;
        text-decoration: none;
        font-style: italic;
        &:hover {
            color: #666;
        }
    }
}

.intrinsic-container {
    position: relative;
    height: 0;
    // overflow: hidden;
    width: 100%;
    height: 450px;
    top: -50px;
}


/* 4x3 Aspect Ratio */
.intrinsic-container-4x3 {
    padding-bottom: 75%;
}

.intrinsic-container iframe {
    position: absolute;
    margin-top: 50px;
    top:0;
    left: 0;
    width: 100%;
    height: 450px;
}
.divider {
  display: inline;
}

.epk-02 {
  margin-top: -28px;
  padding-bottom: 30px;
  margin-bottom: 60px;
  h3 {
    padding-top: 30px;
  }
  p {
    text-align: left;
    line-height: 26px;
    font-size: 13px;
  }
  span {
    color: #ee0000;
    text-align: right;
    display: block;
    cursor: pointer;
    line-height: 26px;
    font-size: 13px;
  }
}
.description p,
.epk-02 p {
  margin: 0;
  margin-bottom: 26px;
}

@media (max-width: 767px) {
  .artwork {
    width: 100%;
  }
  .body-epk {
    .description {
      width: 100%;
      margin-bottom: 30px;
      h1 {
        width: 100%;
      }
    }
  }
  .divider {
    display: none;
  }
  .download-br {
    display: block;
  }
  .download-links {
    line-height: 23px;
  }
}

// Soundclound
.multiSounds__sound.sc-border-dark-bottom {
  height: 238px !important;
}

</style>
