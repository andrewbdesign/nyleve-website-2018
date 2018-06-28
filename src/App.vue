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

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,700');
// a {
//     color: #65C6B6;
//     &:hover {
//         color: #0ECEB1;
//         text-decoration: underline;
//     }
// }

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('../static/homepage-bg.jpg');
    background-size: cover;
    background-attachment: fixed;
}

.resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    margin-bottom: 2em;
    .resp-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
}

.editor-section {
    background: #f4f4f4;
    padding: 1em;
    height: 100%;
}

.main-section {
    background: #fff;
    padding: 2em;
    min-height: 80vh;
    margin-bottom: 20vh;
    .button {
        border: 1px solid #000;
        border-radius: 0;
        padding: 12px 16px;
        font-size: 0.8em;
        color: #000;
        &:hover {
            background: #000;
            color: #fff;
        }
    }
}

h1 {
    font-family: 'Source Serif Pro', serif;
    font-size: 3em;
    font-weight: 700;
    margin: 0;
    margin-bottom: 30px;
    color: #000;
}

h2 {
    color: #000;
    font-family: 'Source Serif Pro', serif;
}

@media (max-width: 1196px){
    .menu-container {
        left: 20px;
    }

    .menu {
        opacity: 0;
        
    }
}


@media (max-width: 845px){
    .container {
        padding: 1em 2em;
    }
    .menu {
        opacity: 1 !important;
    }
    .menu-container {
        opacity: 0;
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.97);
        z-index: 30;
        padding: 80px;
        text-align: center;
        a {
            font-size: 1.1em;
            margin-bottom: 12px;
        }
    }
    .menu-container.mobile-menu.active {
        opacity: 1;
        display: block;
        pointer-events: all;
        a {
            margin-bottom: 0;
        }
    }
}
</style>
