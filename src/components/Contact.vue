<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-half main-section">
                <h1>Contact</h1>

                <a target="_blank" :href="facebook">Facebook</a> 
                | <a target="_blank" :href="youtube">Youtube</a> 
                | <a target="_blank" :href="soundcloud">Soundcloud</a> 
                | <a target="_blank" :href="bandcamp">Bandcamp</a> 
                <!-- | <a target="_blank" :href="youtube">Spotify</a>  -->
                <br>
                <br>
                <a class="email" href="mailto:nylevecontact@gmail.com"> {{ email }} </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            facebook: 'https://www.facebook.com/nylevemusic',
            youtube: 'https://www.youtube.com/channel/UCCm0c2j0funJ0GmN493yj0Q?view_as=subscriber',
            soundcloud: 'https://soundcloud.com/nylevemusic',
            // spotify: 'https://soundcloud.com/nylevemusic',
            bandcamp: 'https://nyleve.bandcamp.com/',
            email: 'nylevecontact@gmail.com'
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-container {
    position: relative;
    margin: auto;
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 80px 26px;
    line-height: 1.5;
    top: 143px;
    h1 {
        margin: 0;
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    p {
        margin: 0;
        font-size: .9em;
        line-height: 1.8;
    }
    a {
        font-size: .9em;
        line-height: 1.8;
        color: #fff;
        text-decoration: none;
        &:hover {
            color: #e2e2e2;
        }
    }
    .email {
        display: block;
        margin-bottom: 30px;
    }
    .input-name,
    .input-email {
        width: 190px;
        height: 18px;
        margin-top: 10px;
        border: none;
        padding: 6px;
        margin-right: 5px;
    }
    .signup-btn {
        display: block;
        margin-top: 20px;
        width: 120px;
        height: 30px;
        border: none;
        background: #fff;
    }

    .indicates-required {
      font-size: 13px;
    }
}
</style>
