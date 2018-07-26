<template>
  <article class="content">

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">Zukunft</div>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true"  > </line-comp>
    <div class="component"></div>
    <div class="component"></div>


    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="0"  animate="true"  > </arc-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="90"  animate="true"  > </arc-comp>
    <div class="component"></div>


    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">{{projects.Coffeefy.datum}}</div>
    <div class="component"></div>
    <project expand-direction="expandCenter" v-bind:img-u-r-l="projects.Coffeefy.content.icon" >
      <template slot="content">
        <h2>{{projects.Coffeefy.content.title}}</h2>
        <span v-html="projects.Coffeefy.content.description"></span>
      </template>
      <template slot="buttons">
        <a v-for="button in projects.Coffeefy.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
          <button>{{button.title}}</button>
        </a>
      </template>
    </project>
    <div class="component"></div>


    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <div class="component"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="0"   animate="true"  > </arc-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="90"  animate="true"  > </arc-comp>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <div class="component"></div>
    <div class="component"></div>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true"  > </line-comp>


    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">07.2018</div>
    <div class="component"></div>
    <div class="component"></div>
    <project  expand-direction="expandLeft" v-bind:img-u-r-l="projects.BadiApp.content.icon" >
      <template slot="content">
        <h2>{{projects.BadiApp.content.title}}</h2>
        <span v-html="projects.BadiApp.content.description"></span>
      </template>
      <template slot="buttons">
        <a v-for="button in projects.BadiApp.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
          <button>{{button.title}}</button>
        </a>
      </template>
    </project>


    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="180"  animate="true"  > </arc-comp>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true" line-type="horizontalReverse" > </line-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="270"  animate="true"  > </arc-comp>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">XX.2018</div>
    <project expand-direction="expandRight" v-bind:img-u-r-l="projects.FlashCode.content.icon" v-bind:img-cover="projects.FlashCode.content.cover" >
        <template slot="content">
          <h2>{{projects.FlashCode.content.title}}</h2>
          <span v-html="projects.FlashCode.content.description"></span>
        </template>
        <template slot="buttons">
          <a v-for="button in projects.FlashCode.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
            <button>{{button.title}}</button>
          </a>
        </template>
    </project>
    <div class="component"></div>
    <div class="component"></div>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true"  > </line-comp>
    <div class="component"></div>
    <div class="component"></div>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="0"  animate="true"  > </arc-comp>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true" line-type="horizontal" > </line-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="90"   animate="true"  > </arc-comp>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">04.2018</div>
    <div class="component"></div>
    <div class="component"></div>
    <project  expand-direction="expandLeft" v-bind:img-u-r-l="projects.ner10.content.icon">
      <template slot="content">
        <h2>{{projects.ner10.content.title}}</h2>
        <span v-html="projects.ner10.content.description"></span>
      </template>
      <template slot="buttons">
        <a v-for="button in projects.ner10.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
          <button>{{button.title}}</button>
        </a>
      </template>
    </project>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <div class="component"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="180"  animate="true"  > </arc-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="270"   animate="true"  > </arc-comp>


    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">03.2018</div>
    <div class="component"></div>
    <project expand-direction="expandCenter" v-bind:img-u-r-l="projects.ictSkills.content.icon" >
      <template slot="content">
        <h2>{{projects.ictSkills.content.title}}</h2>
        <span v-html="projects.ictSkills.content.description"></span>
      </template>
      <template slot="buttons">
        <a v-for="button in projects.ictSkills.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
          <button>{{button.title}}</button>
        </a>
      </template>
    </project>
    <div class="component"></div>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="180"  animate="true"  > </arc-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="270"  animate="true"  > </arc-comp>
    <div class="component"></div>





    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">01.2018</div>
    <project expand-direction="expandRight" v-bind:img-u-r-l="projects.cedilabs.content.icon"  v-bind:img-cover="projects.cedilabs.content.cover">
      <template slot="content">
        <h2>{{projects.cedilabs.content.title}}</h2>
        <span v-html="projects.cedilabs.content.description"></span>
      </template>
      <template slot="buttons">
        <a v-for="button in projects.cedilabs.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
          <button>{{button.title}}</button>
        </a>
      </template>
    </project>
    <div class="component"></div>
    <div class="component"></div>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="0"  animate="true"  > </arc-comp>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true" line-type="horizontal" > </line-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="90"   animate="true"  > </arc-comp>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <div class="component"></div>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="180"  animate="true"  > </arc-comp>
    <arc-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine" rotaion="270"   animate="true"  > </arc-comp>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">10.2017</div>
    <div class="component"></div>
    <project expand-direction="expandCenter" v-bind:img-u-r-l="projects.AppQuest.content.icon" >
      <template slot="content">
        <h2>{{projects.AppQuest.content.title}}</h2>
        <span v-html="projects.AppQuest.content.description"></span>
      </template>
      <template slot="buttons">
        <a v-for="button in projects.AppQuest.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
          <button>{{button.title}}</button>
        </a>
      </template>
    </project>
    <div class="component"></div>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <div class="component"></div>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true" > </line-comp>
    <div class="component"></div>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date"></div>
    <div class="component"></div>
    <line-comp v-bind:thicc="strokeThicknessTimeLine" v-bind:stroke-dash="strokeDashLine"  animate="true" > </line-comp>
    <div class="component"></div>

    <line-comp v-bind:thicc="strokeThicknessTime" stroke-dash="0"  line-type="time"></line-comp>
    <div class="component date">07.2017</div>
    <div class="component"></div>
    <project expand-direction="expandCenter" v-bind:img-u-r-l="projects.TicTacToe.content.icon" v-bind:img-cover="projects.TicTacToe.content.cover" >
      <template slot="content">
        <h2>{{projects.TicTacToe.content.title}}</h2>
        <span v-html="projects.TicTacToe.content.description"></span>
      </template>
      <template slot="buttons">
        <a v-for="button in projects.TicTacToe.content.buttons" v-bind:href="button.link" v-bind:target="button.target" >
          <button>{{button.title}}</button>
        </a>
      </template>
    </project>
    <div class="component"></div>



  </article>
</template>

<script>
  import Line from './lineType'
  import Arc from './arcType'
  import project from './projectComponent'

  //
  // TODO Alle Projekte in data haben und dann dort einfügen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //
    export default {
        name: "TimeLine",
        data () {
          return {
            msg: 'Welcome to Your Vue.js App',
            strokeThicknessTimeLine: 10,
            strokeDashLine: 20,
            strokeThicknessTime: 1,
            projects: {
              Coffeefy: {
                type: ['web', 'app'],
                projektArt: 'idpa',
                datum: 'aktiv',
                content: {
                  title: '"Coffeefy"',
                  icon: require('../assets/icons/flutter_laravel.png'),
                  description: '<p>Ist eine Native-App die ermöglichen soll, Schultermine der BWD einzutragen und zu Teilen,<br/> diese werden dann auf der App benachrichtigt.</p>\n' +
                    '<p>Für die App, arbeiten wir mit Flutter, für den Webteil, benutzen wir das MVC Laravel</p>' +
                  '<span>[Work in progress..]</span>',
                  buttons: {
                    website: {
                      title: 'Webseite',
                      link: 'https://coffeefy.ch/',
                      target: '_blank'
                    },
                    more: {
                      title: 'Mehr Infos',
                      link: '',
                      target: ''
                    }
                  }
                }
              },
              BadiApp: {
                content: {
                  title: 'Badi App',
                  icon: require('../assets/icons/Android_Studio_icon.svg.png'),
                  description: '<p>Eine App die  dem Benutzer Badi in der Nähe anzeigt,<br/>\n' +
                  'Man kann auch nach Badis filtern und die aktuellen Daten der Badi lesen (Wetter, Wasser).</p>' +
                  '<p>Dieses Projekt wurde durch Teamarbeit (2er) während dem App üK entwickelt</p>',
                  buttons: {
                    ük: {
                      title: 'ük',
                      link: '',
                      target: ''
                    },
                    playstore: {
                      title: 'Play Store',
                      link: '',
                      target: ''
                    }
                  }
                }

              },
              FlashCode: {
                content: {
                  title: 'FlashCode',
                  icon: require('../assets/icons/morse_trans.png'),
                  cover: true,
                  description: ' <span>Morsecode via Flashlicht versenden?</span>' +
                  '<p>Mit der App FlashCode ist es  möglich mit dem Flashlicht des Smartphones Morsecode zu senden<br/>' +
                  'diese kann dann mit einem anderen Gerät von der Kamera wieder eingelsen werden.</p>' +
                  '<p>Diese Projekt wurde durch Teamarbeit (2er) während dem [Idpa] entwickelt</p>',
                  buttons: {
                    doku: {
                      title: 'dokumentation',
                      link: '',
                      target: ''
                    },
                    playstroe: {
                      title: 'Play Store',
                      link: 'https://play.google.com/store/apps/details?id=ch.appquest.boredboizz.flashcode',
                      target: '_blank'
                    }
                  }
                }

              },
              ner10: {
                content: {
                  title: '10ner',
                  icon: require('../assets/icons/10ner.png'),
                  description: '  <p>Menschen oberflächlich von 1 bis 10 bewerten,<br/>' +
                  'Profile werden einem zugeteilt, diese kann man dann von 1 bis 10 bewerten.<br/>' +
                  'Diese Webseite soll man nicht zu 100% ernst  nehmen..die Webseite kann auch noch abstürzen! .</p>' +
                  '<p>Dieses Projekt wurde durch Teamarbeit (2er) während dem Web üK entwickelt</p>',
                  buttons: {
                    doku: {
                      title: 'dokumentation',
                      link: '',
                      target: ''
                    },
                    website: {
                      title: 'Webseite',
                      link: 'http://bgirac.dev.bbc-projects.ch/',
                      target: '_blank'
                    }
                }

                }
              },
              ictSkills: {
                content: {
                  title: 'Regional Championships',
                  icon: require('../assets/icons/Logo_ICT_BB_Ostschweiz-1.png'),
                  description: ' <span>Ende März trat ich unter der Kategorie "Application Development" bei den IT-Regionalmeisterschaften mit</span>' +
                  '<p>Dies ist zwar kein Projekt, trozdem konnte ich während dieser Zeit viel Erfahurngen sammeln mit [M120] <br/>' +
                  'Am Schluss landete ich von 95 Kandidaten auf den 43 Platz, was ich aber nächstes Jahr verbessern möchte!\n' +
                  '</p>',
                  buttons: {
                    ranking: {
                      title: 'Ranking',
                      link: '',
                      target: ''
                    }
                  }
                }

              },
              cedilabs: {
                content: {
                  title: 'Weblabs',
                  icon: require('../assets/icons/weblabs.png'),
                  cover: true,
                  description: '<span>Privates Projekt, eine Library an kleinen Websites (singlepage)</span>' +
                  '<p>Benutzer können kleine Projekte anderer Benutzer bestaunen die sie gerade auf Weblabs Hosten<br/>' +
                  ' Zu dieser Zeit wusste ich noch nicht genau wie ein MVC funktioniert. Ich konnte aber viel Erfahrungen mit PHP sammeln\n' +
                  '</p>',
                  buttons: {
                    doku: {
                      title: 'dokumentation',
                      link: '',
                      target: ''
                    },
                    webseite: {
                      title: 'Webseite',
                      link: 'http://cedilabs.de/',
                      target: '_blank'
                    }
                }

                }
              },
              AppQuest: {
                content: {
                  title: 'App Quest',
                  icon: require('../assets/icons/appquest.png'),
                  description: ' <span>Bootcamp wo man für 12Wochen fünf Apps entwickelte</span>' +
                  '<p></p>',
                  buttons: {
                    doku: {
                      title: 'dokumentation',
                      link: '',
                      target: ''
                    },
                    host: {
                      title: 'Host',
                      link: 'http://appquest.hsr.ch/',
                      target: '_blank'
                    },
                    github: {
                      title: 'Github',
                      link: '',
                      target: ''
                    }
                  }
                }
              },
              TicTacToe: {
                content: {
                  title: 'TicTacToe JS',
                  icon: require('../assets/icons/tictac.png'),
                  cover: true,
                  description: '<span>Java script Projekt der Gibb</span>' +
                  '<p></p>',
                  buttons: {
                    website: {
                      title: 'Webseite',
                      link: 'http://cedilabs.de/labs/2/TicTacToe_Projekt/',
                      target: '_blank'
                    }
                  }
                }

              }
            }
          }
        },
      components: {
          'line-comp' : Line,
          'arc-comp' : Arc,
          'project' : project
      },
      methods: {
          expandDiv: function () {
            this.expanded = !this.expanded,
            console.log("expanded")
          }
      },


    }
</script>

<style scoped>
html, body {
  overflow: hidden;
  transition: width  .5s , height .1s, border-radius .5s, transform .3s  ;
}
.content {
  width: 100%;
  display: inline-grid;
  grid-template-columns: 5% 5% [spliter] repeat(3,  30%);

  background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <circle opacity="0.7" cx="5" cy="5" r="4"  fill="#8bd081" /> \
  </svg>');
  background-size: 50px 50px;
}
.date {
  padding-left: 10px;
  line-height: 100px;
  white-space: nowrap;
}
.nav-fade-enter-active, .nav-fade-leave-active {
  transition: opacity 1.3s ease;
}
.nav-fade-enter, .nav-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 900px) {
  .content {
    grid-template-columns: 1% 4% [spliter] repeat(3,  31.5%);
    background-size: 100px 100px;
  }

}

</style>
