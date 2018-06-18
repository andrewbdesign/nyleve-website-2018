<template>
    <div class="nav">
        <div class="menu-container">
            <router-link to="/blog">NYLEVE</router-link>
            <router-link to="/blog">News / Blog</router-link>
            <router-link to="/bio">Bio</router-link>
            <router-link to="/listen">Listen</router-link>
            <router-link to="/videos">Videos</router-link>
            <router-link to="/buy">Buy</router-link>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                // title: 'Home'
            }
        }
    }
</script>

<style lang="scss">
.main-container {
    margin-top: 70px;
}
.nav {
    .menu-container {
        position: fixed;
        :first-child {
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 18px;
        }
        a {
            font-weight: normal;
            color: #000;
            display: block;
            text-decoration: none;
            font-size: .9em;
            margin-bottom: 11px;
        }
    }
}
</style>
