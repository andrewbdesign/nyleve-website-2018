<template lang="html">
    <div class="blog-container">
        <h1>News / Blog</h1>
        <div class="article-container">

          <div class="" v-if="creator">
            <p>Add blog entry here</p>
            <div class="">
              <form id="form"class="" v-on:submit.prevent="addArticle">
                <br>
                <label for="articleTitle">Title:</label>
                <br>
                <input type="text" id="articleTitle" v-model="newArticle.title">

                <br>
                <label for="articleAuthor">Author:</label>
                <br>
                <input type="text" id="articleAuthor" v-model="newArticle.author">

                <br>
                <label for="articleBody">Body:</label>
                <br>
                <textarea type="text" id="articleBody" v-model="newArticle.body"></textarea>

                <br>
                <label for="articleDate">Date:</label>
                <br>
                <input type="text" id="articleDate" v-model="newArticle.date">
                <br>
                <input type="submit" name="" value="Add article">

              </form>
            </div>
          </div>

            <h1>Welcome to my blog</h1>
            <p>Keep up to date with my blog written by yours truly.</p>
            <br>

            <!-- <div v-for="article in articles" class="article-entry"> -->
            <div v-for="article in reverseItems" class="article-entry">
              <h1 class="title">{{article.title}}</h1>
              <p class="author">{{article.author}}</p>
              <p class="body">{{article.body}}</p>
              <p class="date">{{article.date}}</p>
              <p class="delete" v-on:click="removeArticle(article)">DELETE</p>
            </div>
        </div>
    </div>
</template>

<script>

import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyD7k1o0pDJYY4EpsbEM5FmsIBF-CZtZ3uM",
  authDomain: "nyleve-music.firebaseapp.com",
  databaseURL: "https://nyleve-music.firebaseio.com",
  projectId: "nyleve-music",
  storageBucket: "nyleve-music.appspot.com",
  messagingSenderId: "84839106934"
}

let app = Firebase.initializeApp(config)
let db = app.database();

let articleRef = db.ref('articles')

export default {
  firebase: {
    articles: articleRef
  },
  data () {
    return {
      newArticle: {
        title: '',
        body: '',
        author: '',
        date: ''
      },
      creator: true
    }
  },
  methods: {
    addArticle() {
      articleRef.push(this.newArticle)
      this.newArticle.title = ''
      this.newArticle.body = ''
      this.newArticle.author = ''
      this.newArticle.date = ''
      this.creator = false
    },
    removeArticle(article) {
      // articleRef.child(article['.key']).remove()
      var txt;
      var r = confirm("Press a button!");
      if (r == true) {
          txt = "You pressed OK!";
          articleRef.child(article['.key']).remove()
      } else {
          txt = "You pressed Cancel!";
      }
    }
  },
  computed: {
    reverseItems() {
      return this.articles.slice().reverse();
    }
  }

}

// console.log('articleRef', articleRef)
</script>

<style lang="scss" scoped>
.blog-container {
    margin-top: 70px;
}
h1, p {
    text-align: left;
    margin: 0;
}

.article-container {
    height: 100%;
    margin: auto;
    text-align: left;
    background: rgba(255,255,255,0.1);
    padding: 50px 26px;
    line-height: 1.5;
    margin-top: 30px;
    padding-bottom: 0;
    margin-bottom: 30px;
    h1 {
        margin: 0;
        font-size: 1.2em;
        margin-bottom: 10px;
    }
    p.date {
        font-style: italic;
        font-size: .8em;
        margin-bottom: 50px;
    }
    p.content {
        font-size: .9em;
        line-height: 1.8;
        margin-bottom: 60px;
    }
    hr {
        margin-bottom: 40px;
    }
}
</style>
