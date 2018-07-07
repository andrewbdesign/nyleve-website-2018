<template>
    <div class="home-page">
        <h1> {{ title }} </h1>
        <img src="../assets/ep-artwork.jpg" alt="">
        <p>Website coming soon.</p>
    </div>
</template>

<script>
export default {
  name: 'Coming Soon',
  data () {
    return {
        title: 'An Empty Space Between'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
    font-family: 'Source Serif Pro', serif;
    font-size: 3em;
    font-weight: 700;
    margin: 0;
    margin-bottom: 30px;
    color: #000;
}

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
