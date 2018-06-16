<template>
    <div class="nav">
        <div class="menu-container">
            <router-link to="/">NYLEVE</router-link>
            <!-- <router-link to="/">Home</router-link> -->
            <router-link to="/listen">Listen</router-link>
            <router-link to="/buy">Buy</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/blog">News / Blog</router-link>
            <router-link to="/bio">Bio</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                title: 'Home'
            }
        }
    }
</script>

<style scoped lang="scss">
.nav {
    position: fixed;
    width: 30%;
    left: 0;
    top: 0;
    height: 100%;
    .menu-container {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        margin: auto;
        width: 60%;
        height: 250px;
        text-align: left;
        :first-child {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 18px;
        }
        a {
            font-weight: normal;
            color: #FFF;
            display: block;
            text-decoration: none;
            font-size: .9em;
            margin-bottom: 11px;
        }
    }
}
</style>
