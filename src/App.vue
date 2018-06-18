<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700');
body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1 {
    font-family: 'Source Serif Pro', serif;
    font-size: 3em;
    font-weight: 700;
    /* text-transform: uppercase; */
    margin: 0;
    margin-bottom: 30px;
    color: #000;
}

h2 {
    color: #000;
    font-family: 'Source Serif Pro', serif;
}

</style>
