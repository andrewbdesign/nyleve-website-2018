<template>
    <div id="app">
        <div class="app-container">
            <app-nav></app-nav>
            <div class="app-body">
                <router-view/>
            </div>

        </div>

    </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
    background-image: url('./assets/background.jpg');
    background-attachment: fixed;
    backgound-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    margin: 0;
}
#app {

    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
    /*margin-top: 60px;*/
    margin: 0;
}
.app-container {
    max-width: 860px;
    height: 100%;
    margin: auto;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
}
.app-body {
    position: absolute;
    /*width: calc(100% - 20%);*/
    /*left: 20%;*/
    width: 100%;
    top: 0;
    height: 100%;
}

@media (max-width: 767px) {
  .app-container {
    width: 90%;
  }
}
</style>
