<template lang="html">
    <div class="buy-page">
        <h1>Buy my EP now!</h1>
        <div class="work-container">

            <div class="title">
                <h3> {{ title }} </h3>
                <img src="../assets/ep-artwork.jpg" alt="">
            </div>

            <div class="cta-section">
                <h3>Tracklist:</h3>
                <ol>
                    <li v-for="track in tracks"> {{ track.track }} </li>
                </ol>
                <button id="cta-button" type="button" name="button">buy now</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'An Empty Space Between',
            albumArt: 'http://via.placeholder.com/350x350',
            tracks: [
                {track: 'As It So Happens'},
                {track: 'An Empty Space Between'},
                {track: 'Lately & Afterwards'},
                {track: 'Again & Again'},
                {track: 'Lindfield'},
                {track: 'And So On'}
            ]
        }
    },
    mounted() {
        var ctaBtn = document.getElementById('cta-button')
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault()
            window.open('http://google.com')
        })
    }
}
</script>

<style lang="scss" scoped>
    .buy-page {
        text-align: left;
        .title {
            position: relative;
            width: 45%;
            float: left;
            margin-right: 5%;
            img {
                width: 100%;
            }
        }
        .cta-section {
            position: relative;
            width: 50%;
            float: left;
            ol {
                // list-style: none;
                padding: 0 0 0 20px;
            }
            li {
                // list-style:none;
                padding-left:0;
                // list-style-position: inside;
            }
        }
    }
    button {
        display: block;
        background: white;
        border: none;
        color: #000;
        width: 90px;
        height: 30px;
        transition: background .1s ease-in, color .1s ease-in;
        cursor: pointer;
        &:hover {
            background: #000;
            color: #FFF;
        }
    }
</style>
