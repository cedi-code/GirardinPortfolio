<template>
  <div>

    <transition name="expand">
      <div class="hire">
        <div class="glass">
          <div class="hire-me">
            <router-link :to="preview">preview</router-link>
            <div class="mask"></div>
          </div>
        </div>
      </div>
    </transition>

    <li v-for="site in sites" v-bind:key="site.id" transiton="site" @click="$emit('close')">
      <router-link :to="site.link" >
        {{site.title}}
      </router-link>
    </li>
  </div>


</template>

<script>
    export default {
      name: "navigationItems",
      data() {
        return {
          navHover: false,
          mobile: false,
          preview: '/preview',
          sites: {
            cv: {
              id: 0,
              title: 'Lebenslauf',
              link: '/cv',
              active: false
            },
            fahigkeiten: {
              id: 1,
              title: 'Fahigkeiten',
              link: '/skills',
              active: false
            },
            projekte: {
              id: 2,
              title: 'Projekte',
              link: '/projects',
              active: false
            },
            freizeit: {
              id: 3,
              title: 'Freizeit',
              link: '/hobbys',
              active: false
            }
          }
        }
      }
    }
</script>

<style scoped>



  .hire {
    position: absolute;
    right: 15%;
    top: 4.5vh;
    background-color: white;
    height: 30vh;
    width: 30vh;
    background: url("../assets/logo.png") center center no-repeat ;
    transition: all 0.5s ease;
    background-color: white;
    border-radius: 50%;

  }
  .hire:hover .glass {
    opacity: 1;


  }
  .hire:hover {
    transform: scale(1.1);
  }


  .glass {
    height: 30vh;
    width: 30vh;
    background: url('../assets/logo.png') center center no-repeat; /* blurry image */
    opacity: 0;
    border-radius: 50%;
    background-color: #d8d8d8;
    display: flex;
    transition: all 0.5s ease;
    align-items: center;
    justify-content: center;
  }
  .hire-me {
    position: relative;
    color: white;
    overflow: hidden;
    padding: 10px;
    font-size: 120%;
    letter-spacing: 3px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: black;
    transition: all .25s;
  }
  .hire-me:hover {
    cursor: pointer;

  }
  .hire-me:hover .mask {
    background-color: #fff;
    transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
  }
  .hire-me .mask {
    background-color: #fff;
    background-color: rgba(255, 255, 255, 0.5);
    height: 100px;
    position: absolute;
    transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
    transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
    width: 200px;
  }
  .nav {
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <circle opacity="0.4" cx="5" cy="5" r="4"  fill="white" /> \
  </svg>');
    /* <path opacity="0.5" stroke-width="3" stroke-linecap="round" stroke="white" d="M 10,10 L 30,30 M 30,10 L 10,30" />\ */
    background-size: 50px 50px;
    background-color: #42b883;

    padding: 10px;
    height: 10vh;
    transition: height 1s ease;
  }
  .nav:hover {
  }
  .expand {
    height: 50vh;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    margin: 0;
    list-style: none;
    padding-top: 5px;

  }
  li {
    padding: 2.5vh 0;
    transition: letter-spacing .25s ease, width .75s ease;
    color: white;
    font-size: 200%;
    width: 70%;
    align-items: center;
    display: flex;
    letter-spacing: 7px;
    margin: auto;
  }
  li::before,
  li::after {
    content: "";
    background: white;
    height: .1em;
    margin: 0 1em;
  }
  /* TODO diese art von verschiebung noch ändern!!! */
  li::before {
    flex: .3;
  }
  li::after {
    flex: .7;
  }
  li:hover {
    letter-spacing: 10px;
    width: 75%;
  }
  .expand-enter-active, .router-anim-leave-active {
    transition: transform .5s ease;
  }
  .expand-enter, .expand-anim-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    transform: scale(1.5);
  }
  @media screen and (max-width: 1100px) {
    .hire {
      position: static;
      margin:  0 auto;
      display: block;
      right: auto;
      top: auto;
      height: 20vh;
      width: 20vh;
      background-size: 80%;


    }
    .glass {
      height: 20vh;
      width: 20vh;
      background-size: 80%;
    }
    li {
      padding: 1vh;
      width: 90%;
    }
    li:hover {
      width: 95%;
    }
    li::before {
      flex: 1;
    }
    li::after {
      flex: 1;
    }

  }
  @media screen and (max-width: 800px) {
    li {
      padding: 1.5vh;
      width: 90%;
      display: block;
    }
    li:hover {
      width: 95%;
    }
    li::before {
      display: none;
    }
    li::after {
      display: none;
    }
  }



</style>
