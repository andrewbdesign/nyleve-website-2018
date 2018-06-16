<template lang="html">
    <div class="">
        <div class="bio-container">
            <h1> {{ title }} </h1>
            <p> {{ body }} <span @click="showBody" v-if="!isShowingFullBody">Read more.</span></p>
            <div v-if="isShowingFullBody">
              <p v-for="paragraph in paragraphs"> {{ paragraph.paragraph }} </p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Bio',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            paragraphs: [
              {paragraph: 'paragraph 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
              {paragraph: 'paragraph 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
              {paragraph: 'paragraph 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
              {paragraph: 'paragraph 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            ],
            isShowingFullBody: false
        }
    },
    methods: {
      showBody() {
        this.isShowingFullBody = true
      }
    }
}
</script>

<style lang="scss" scoped>
.bio-container {
    position: relative;
    margin: auto;
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 80px 26px;
    line-height: 1.5;
    margin-top: 143px;
    padding-bottom: 143px;
    h1 {
        margin: 0;
        font-size: 1.2em;
        margin-bottom: 20px;
    }
    p {
        margin: 0;
        font-size: .9em;
        line-height: 1.8;
        margin-bottom: 20px;
    }
}
</style>
