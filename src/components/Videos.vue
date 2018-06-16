<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column video-page">
                <h1>Videos</h1>
                <template v-for="video in videos">
                    <p>{{ video.title }}</p>
                    <div class="resp-container">
                        <iframe class="resp-iframe" :src="video.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </template>
            </div>
        </div>
  </div>
</template>

<script>
/* 

<iframe width="1425" height="595" src="https://www.youtube.com/embed/ZXWCbZdrkUM?list=PLktkeEq-ZD5fjyq-F8CVTR812Z6LlMRvm" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
*/
export default {
    data() {
        return {
            videos: [
                {title: 'D\'Angelo - Unititled (How Does It Feel)', url: 'https://www.youtube.com/embed/SxVNOnPyvIU'},
                {title: 'Lucie,Too - Lucky (Official Music Video)', url: 'https://www.youtube.com/embed/gHsUaS9r5R8'},
                {title: 'Just The Two Of Us - Band Geeks Jamming with Hanan Rubinstein', url: 'https://www.youtube.com/embed/ZXWCbZdrkUM'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .video-page {
        padding-bottom: 4em;
    }
    // iframe {
    //     width: 100%;
    // }
    p {
        margin: 30px 0 10px;
    }
    .resp-container {
        position: relative;
        overflow: hidden;
        padding-top: 56.25%;
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
