<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column">
                <h1>Have a listen why don't ya?</h1>
                <div class="intrinsic-container intrinsic-container-16x9">
                    <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/359882759%3Fsecret_token%3Ds-C7uUO&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h1 {
    margin-bottom: 0;
}
.intrinsic-container {
    position: relative;
    height: 0;
    overflow: hidden;
    width: 100%;
    height: 400px;
}

/* 16x9 Aspect Ratio */
.intrinsic-container-16x9 {
    padding-bottom: 56.25%;
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
    height: 400px;
}
</style>
