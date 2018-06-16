<template>
    <div class="nav">
        <div class="menu-container">
            <router-link to="/blog">NYLEVE</router-link>
            <router-link to="/listen">LISTEN</router-link>
            <router-link to="/videos">VIDEOS</router-link>
            <router-link to="/bio">BIO</router-link>
            <router-link to="/buy">BUY</router-link>
            <router-link to="/contact">CONTACT</router-link>
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

<style scoped lang="scss">
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
