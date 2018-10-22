<template>
    <div class="content">
      <ul>
        <hobby tag="li" v-bind:back-image="allHobbys.reisen.bild" ref="ho0" id="ho0"  @open="onHobby(0)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.reisen.title}}</template>
          <template slot="content" >
            <h3 class="titleText">Ein Gefühl von anonymität und neugier</h3>
            <hr>

            <p>Ich reise gerne nach grossen Städte in Europa und sammle jedes mal neue Erfahrungen. Wo ich schon mal war:.</p>
            <GmapMap
              :center="center"
              :zoom="4"
              :options="optionsMap"
              map-type-id="terrain"
              style="width: 100%; height: 250px"
            >

              <GmapMarker

                v-for="m in markers"
                :key="m.index"
                :position="m.position"
                :clickable="true"
                :draggable="false"
                @click="center=m.position">

              </GmapMarker>
            </GmapMap>
          </template>

        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.gamen.bild" ref="ho1" id="ho1" @open="onHobby(1)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.gamen.title}}</template>
          <template slot="content" >
            <h3 class="titleText">Mehr als nur eine Unterhaltung<br></h3>
            <hr>

            <p>Als kleines Kind spielte ich gerne mit meinem Gameboy. Heute spiele ich lieber mit meiner Nintendo Switch </p>
            <p>Am meisten spiele ich mit Freunden, sonst mässige ich die Unterhaltung. <br>Ich spiele gerne Indie Spiele oder alles was Nintendo herausbringt.</p>
          </template>
        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.fitness.bild" ref="ho2" id="ho2" @open="onHobby(2)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.fitness.title}}</template>
          <template slot="content" >
            <h3 class="titleText">Sport zu treiben ist wichtig für jederman. <br></h3>
            <hr>

            <p>Damit ich nicht nur die ganze Zeit vor dem Computer sitze, gehe ich noch ins Fitness-Basefit (Bern) um meinen Körper fit zu halten.</p><p>
            Früher habe ich  9 Jahre lang die Jugi besucht (Turnverein) wo ich auch viel an Wettkämpfen teilgenommen habe. Heute fahre ich auch gerne noch mit dem Fahrrad zum Bahnhof.</p>
          </template>

        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.code.bild" ref="ho3" id="ho3" @open="onHobby(3)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.code.title}}</template>
          <template slot="content" >
            <h3 class="titleText">Ich liebe es zu Coden.
              Sei es front oder backend.<br></h3>
            <hr>
            <p>z.B dieser Effekt auf der Freizeit-Seite ist Selfmade.<br>
            Damit die Pfeile einen anderes Clickevent ausführen als der div body,<br>
            gibt es in Vue.js eine option dies zu beheben in dem man <span>v-on:click.capture</span> setzt.<br>
              Somit werden zuerst die inneren Onclicks ausgeführt.</p>
          </template>
        </hobby>
        <hobby tag="li" v-bind:back-image="allHobbys.musik.bild" ref="ho4" id="ho4" @open="onHobby(4)" @next="switchHobby(-1)" @back="switchHobby(1)">
          <template slot="title">{{allHobbys.musik.title}}</template>
          <template slot="content" >
            <h3 class="titleText">"Das Beste in der Musik steht nicht in den Noten"     ~Gustav Mahler<br></h3>
            <hr>

            <p>Dieses Zitat könnte man nicht nur auf die Musik beziehen sondern auch auf Personen.</p><p>
              Ich habe in der Freizeit 6 Jahren Trompete gespielt und war 4 Jahren bei der Jugendmusik Lyss aktiv.<br>
              Zuletzt habe ich noch ihr neues Logo entworfen, konnte aber damals noch nicht ihre Webseite verbessern.<br>
            Musik höre ich aber während der Freizeit immer noch gerne.</p>
          </template>
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
          optionsMap: {
            disableDefaultUI: true
          },
          center: {
            lat: 46.8182,
            lng: 8.2275
          },
          markers: [{
            index: 0,
            position: {
              lat: 51.5074,
              lng: -0.1278
            }
          }, {
            index: 1,
            position: {
              lat: 48.8566,
              lng: 2.3522
            }
          }, {
            index: 2,
            position: {
              lat: 50.8503,
              lng: 4.3517
            }
          }, {
            index: 3,
            position: {
              lat: 45.4642,
              lng: 9.1900
            }
          }, {
            index: 4,
            position: {
              lat: 37.7510,
              lng: 14.9934
            }
          }, {
            index: 5,
            position: {
              lat: 48.1351,
              lng: 11.5820
            }
          }],
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
            document.getElementById("ho" + id).style.height = "60vh";
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
            this.isSmartSmall = false;
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
  .titleText {
    font-weight: 300;
  }
  ul {
    width: 100%;
    list-style-type: none;
    margin: auto;
    text-align: left;
    white-space: normal;
  }
  li {

    width: 15%;
    height: 50vh;
    margin: 1%;
    border: 1px solid white;
    display: inline-block;
    transition: width 1s ease;
  }
  #myMap {
    height:300px;
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    ul {
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
