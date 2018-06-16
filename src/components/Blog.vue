<template lang="html">
  <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column is-two-thirds blog-container">
                <h1>Blog</h1>
                <div class="entry" v-for="blog in blogs.slice().reverse()">
                    <h2>{{ blog.title }}</h2>
                    <p>Date: {{ blog.date }}</p>
                    <img :src="blog.image">
                    <p>{{ (blog.copy).substring(0, 400) + '...' }}<br><a target="_blank"> Read more</a></p>
                    
                </div>
            </div>
        </div>
  </div>
</template>

<script>

function shorten(text) {
    return text.substring(0, 130) + '...'
}

export default {
  data () {
    return {
        blogs: [
            {title: 'First post', date: 'Jun 6, 2018', copy:'Stage fright or performance anxiety is the anxiety, fear, or persistent phobia which may be aroused in an individual by the requirement to perform in front of an audience, whether actually or potentially (for example, when performing before a camera). In the context of public speaking, this may precede or accompany participation in any activity involving public self-presentation. In some cases stage fright may be a part of a larger pattern of social phobia (social anxiety disorder), but many people experience stage fright without any wider problems. Quite often, stage fright arises in a mere anticipation of a performance, often a long time ahead. It has numerous manifestations: stuttering, tachycardia, tremor in the hands and legs, sweaty hands, facial nerve tics, dry mouth, and dizziness.', image: 'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EQ8Uu6D/man-playing-electric-guitar-on-stage-concert-rock-close-up_vje2yssp__F0000.png'},
            {title: 'EP review', date: 'Jun 10, 2018', copy:'A camera is an optical instrument for recording or capturing images, which may be stored locally, transmitted to another location, or both. The images may be individual still photographs or sequences of images constituting videos or movies. The camera is a remote sensing device as it senses subjects without any contact . The word camera comes from camera obscura, which means "dark chamber" and is the Latin name of the original device for projecting an image of external reality onto a flat surface. The modern photographic camera evolved from the camera obscura. The functioning of the camera is very similar to the functioning of the human eye. The first permanent photograph was made in 1826 by Joseph Nicéphore Niépce.', image: 'https://www.billboard.com/files/styles/article_main_image/public/media/ODESZA-live-red-rocks-amphitheatre-2017-a-billboard-1548.jpg'},
            {title: 'relaxation', date: 'Jun 16, 2018', copy:'Photographic film is a strip or sheet of transparent plastic film base coated on one side with a gelatin emulsion containing microscopically small light-sensitive silver halide crystals. The sizes and other characteristics of the crystals determine the sensitivity, contrast and resolution of the film.', image: 'https://static1.squarespace.com/static/562d414ae4b08c9d7b3b1128/t/597a0bf617bffc7e459d27e9/1501170726731/IMG_1129-Edit.jpg'},
        ]
    }
  }
}

</script>

<style lang="scss">
.main-container {
    margin-top: 70px;
}

.blog-container {
    .entry {
        padding: 0 0 3em;
        h2 {
            font-size: 2em;
            font-weight: 700;
            text-transform: uppercase;
        }
        img {
            width: 100%;

        }
    }
}

</style>
