<template>
    <div class="content">
      <ul>
        <hobby tag="li" v-bind:back-image="allHobbys.reisen.bild" ref="ho0" id="ho0"  @open="onHobby(0)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.reisen.title}}</template>
        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.gamen.bild" ref="ho1" id="ho1" @open="onHobby(1)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.gamen.title}}</template>
        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.fitness.bild" ref="ho2" id="ho2" @open="onHobby(2)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.fitness.title}}</template>

        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.code.bild" ref="ho3" id="ho3" @open="onHobby(3)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.code.title}}</template>
          <template slot="content" >
            Ich liebe es zu Coden. <br>
            In der Freizeit, versuche ich immer etwas Neues.<br>

            z.B dieser Effekt auf der Freizeit seite ist self made<br>
            Damit die Pfeile einen anderes click event ausführen als der div body,<br>
            gibt es in Vue.js dies zu beheben in dem man <span>v-on:click.capture</span> setzt.<br>
              Somit werden zuerst die ineren onclicks ausgeführt<br>
          </template>
        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.musik.bild" ref="ho4" id="ho4" @open="onHobby(4)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.musik.title}}</template>
        </hobby>
      </ul>
    </div>
</template>

<script>
  import Hobby from './HobbyBox';
    export default {
        name: "Hobbys",
      data () {
        return {
          activeHobby: -1,
          isSmall: false,
          allHobbys: {
            reisen: {
              title: 'Reisen',
              bild: require('../assets/cv/hobby/travel.jpg')
            },
            gamen: {
              title: 'Gamen',
              bild: require('../assets/cv/hobby/nintendoswitch.jpg')

            },
            fitness: {
              title: 'Fitness',
              bild: require('../assets/cv/hobby/basefitbrugg.jpg')
            },
            code: {
              title: 'Coden',
              bild: require('../assets/cv/sprachen/code1.jpg')
            },
            musik: {
              title: 'Musik',
              bild: require('../assets/cv/hobby/jugendmusik.jpg')
            }
          }
        }
      },
      methods: {
        switchHobby: function (direction) {

          if (window.innerWidth > 1100) {
            document.getElementById("ho" + this.activeHobby).style.width = "8%";
          } else {
            document.getElementById("ho" + this.activeHobby).style.height = "15vh";
          }

          var checkH = this.activeHobby + direction;
          if (checkH >= 0 && checkH < 5) {

            var elem = document.getElementById("ho" + checkH)
            elem.click();
            if (window.innerWidth > 1100) {
              elem.style.width = "50%";
            } else {
              elem.style.height = "50vh";
            }


          } else {
            this.resetHobbys();
          }
        },
        onHobby: function (id) {
          for (var i = 0; i < 5; i++) {
            if (i != id) {
              console.log(window.innerWidth);
              if (window.innerWidth > 1100) {
                document.getElementById("ho" + i).style.width = "8%";

              } else {
                document.getElementById("ho" + i).style.height = "15vh";
              }
              this.callHobbyList(i);

            }

          }
          if (window.innerWidth > 1100) {
            document.getElementById("ho" + id).style.width = "50%";
          } else {
            document.getElementById("ho" + id).style.height = "50vh";
          }

          this.activeHobby = id;
        },
        resetHobbys: function () {
          for (var i = 0; i < 5; i++) {
            if (window.innerWidth > 1100) {
              document.getElementById("ho" + i).style.width = "15%";
            } else {
              document.getElementById("ho" + i).style.height = "15vh";
            }


          }
        },
        callHobbyList: function (id) {
          switch (id) {
            case 0:
              this.$refs.ho0.closeHobby();
              break;
            case 1:
              this.$refs.ho1.closeHobby();
              break;
            case 2:
              this.$refs.ho2.closeHobby();
              break;
            case 3:
              this.$refs.ho3.closeHobby();
              break;
            case 4:
              this.$refs.ho4.closeHobby();
              break;
          }
        },
        removeStyles: function() {
          if(window.innerWidth > 1100 && this.isSmall) {
            this.isSmall = false;
            for (var i = 0; i < 5; i++) {
              var elem = document.getElementById("ho" + i)
              if (elem.style.removeProperty) {
                elem.style.removeProperty('height');
              } else {
                elem.style.removeAttribute('height');
              }
            }

          }else if(!this.isSmall) {
            this.isSmall = true;
            for (var i = 0; i < 5; i++) {
              var elem = document.getElementById("ho" + i)
              if (elem.style.removeProperty) {
                elem.style.removeProperty('width');
              } else {
                elem.style.removeAttribute('width');
              }
            }
          }
        },
        addChecks: function() {
          window.addEventListener('resize', this.removeStyles)
        }
      },
      created() {
        this.addChecks()
      },
      components: {
        'hobby' : Hobby,
      }
    }
</script>

<style scoped>
  .content {
    padding: 7%;
    font-family: 'Renner*', Helvetica, Arial, sans-serif;
    color: white;
  }
  ul {
    width: 100%;
    list-style-type: none;
    margin: auto;
    text-align: left;
    white-space: nowrap;
  }
  li {

    width: 15%;
    height: 50vh;
    margin: 1%;
    border: 1px solid white;
    display: inline-block;
    transition: width 1s ease;
  }
  @media screen and (max-width: 1100px) {
    ul {
      width: 100%;
      list-style-type: none;
      margin: auto;
      text-align: left;
      white-space: nowrap;
      padding: 0;
    }
    li {
      height: 15vh;
      width: 100%;
      margin: 1%;
      border: 1px solid white;
      display: block;
      transition: height 1s ease;
    }
    .content {
      padding: 7%;

    }

  }
  @media screen and (max-width: 700px) {
    .content {
      padding: 3%;

    }
    li {

      margin: 2%;

    }
  }
</style>
