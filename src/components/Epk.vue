<template>
    <div class="home-page">
        <h1>{{epk.title}}</h1>
        <div class="press-shot-crop" :style="{ 'background-image': 'url(' + epk.coverImage + ')' }"></div>
        <div class="body-epk">
          <div class="download-links">Download a high-resolution (PRINT) press shot <a :href="epk.highRes" target="_blank">HERE</a> <div class="divider">|</div> <br class="download-br"> Download a high-resolution (WEB) press shot <a :href="epk.lowRes" target="_blank">HERE</a> </div>

              <div class="container">
                <h3>Latest Release</h3>
                <div class="artwork">
                  <img :src="epk.showcaseAlbum.image" alt="">
                </div>
                <div class="description">
                  <h1> {{ epk.showcaseAlbum.title }} </h1>
                  <p> {{ epk.showcaseAlbum.description }} </p>
                  <template v-for="(track, index) in epk.showcaseAlbum.tracks">
                    <p>{{index + 1}}. {{track.track}}</p>
                  </template>
                </div>
                <div class="clear"></div> <!-- do i need this -->
              </div>

        </div>

        <iframe width="100%" height="450" scrolling="yes" frameborder="no" :src="epk.iframeSongs"></iframe>

        <div class="body-epk epk-02">
              <div class="container">
                <h3> Nyleve Bio </h3>
                <p> {{paragraphs[0]}} </p>
                <span @click="showBody" v-if="!isShowingFullBody">Read more.</span>

                <div v-if="isShowingFullBody">
                  <template v-for="(paragraph, index) in sliceItems(1)">
                    <p v-if="paragraphs[index]">{{paragraphs[index + 1]}}</p>
                  </template>

                </div>
              </div>

        </div>

    </div>
</template>

<script>
export default {
  computed: {
    epk() { return this.$store.getters.epk },
    paragraphs() {
      var bodyCopy = this.$store.getters.bio 
          bodyCopy = bodyCopy.split(/[\r\n]+/g)
      return bodyCopy
    }
  },
  data () {
    return {
        isShowingFullBody: false
    }
  },
  methods: {
    showBody() {
      this.isShowingFullBody = true
    },
    sliceItems(start) {
      var endIs = this.paragraphs.length
      return this.paragraphs.slice(start, endIs);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
    font-weight: bold;
    color: #000;
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
