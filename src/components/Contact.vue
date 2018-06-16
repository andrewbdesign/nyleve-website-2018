<template lang="html">
    <div class="container main-container">
        <div class="columns">
            <div class="column is-one-quarter">
                <app-nav></app-nav>
            </div>
            <div class="column">
                <h1>Contact</h1>
                <p>Want me to perform for ya? Drop us a line</p>
                <a target="_blank" :href="facebook">Facebook</a> | <a target="_blank" :href="youtube">Youtube</a> |
                <a class="email" href="mailto:nyleve@gmail.com"> {{ email }} </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            facebook: 'https://www.facebook.com',
            youtube: 'https://www.youtube.com',
            email: 'nyleve@gmail.com'
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-container {
    position: relative;
    margin: auto;
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 80px 26px;
    line-height: 1.5;
    top: 143px;
    h1 {
        margin: 0;
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    p {
        margin: 0;
        font-size: .9em;
        line-height: 1.8;
    }
    a {
        font-size: .9em;
        line-height: 1.8;
        color: #fff;
        text-decoration: none;
        &:hover {
            color: #e2e2e2;
        }
    }
    .email {
        display: block;
        margin-bottom: 30px;
    }
    .input-name,
    .input-email {
        width: 190px;
        height: 18px;
        margin-top: 10px;
        border: none;
        padding: 6px;
        margin-right: 5px;
    }
    .signup-btn {
        display: block;
        margin-top: 20px;
        width: 120px;
        height: 30px;
        border: none;
        background: #fff;
    }

    .indicates-required {
      font-size: 13px;
    }
}
</style>
