<template>
  <div class="ul_icons">
    <span class="li_element" v-for="icon in icons">
      <a v-bind:target="icon.target" v-bind:href="icon.link">
        <img  v-bind:class="{ img_3 : true}" v-bind:alt="icon.title" v-bind:src="icon.src"/>
      </a>
    </span>
  </div>
</template>

<script>
    export default {
        name: "iconsTop",
      data () {
        return {
          icons: {
            daten: {
              title: 'daten',
              src: require('../assets/key.png'),
              link: 'https://data.cedricgirardin.ch/papers',
              target: ''
            },
            gmail: {
              src: require('../assets/gmail-logo.png'),
              title: 'gmail',
              link: 'mailto:cedric.girardin@bwdbern.ch?Einladung Bewerbungsgespräch',
              target: '_blank'
            },
            twitter: {
              src: require('../assets/twitter-logo-silhouette.png'),
              title: 'twitter',
              link: 'https://twitter.com/cedi__boy',
              target: '_blank'
            }

          }
        }
      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
    letter-spacing: 5px;
    color: white;
    font-size: 100%;
  }
  a .img_3 {
    max-width: 3vh;
    max-height: 3vh;
    padding: 1vh;
    border-radius: 10px;
    transition: background-color 0.25s ease;
  }
  a .img_3:hover {
    background-color: #14171A;
  }
  .ul_icons {
    list-style-type: none;
    margin: 0;
    padding: 10px;
  }
  .li_element {
    float: left;
    padding: 0 5px;
  }
</style>
