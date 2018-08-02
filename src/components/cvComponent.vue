<template>
  <div class="cvGrid">
    <div class="boxli" id="personalien">
      <h2>Personalien</h2>
      <ul>
        <li v-for="txt in cv.personalien">{{txt}}</li>
      </ul>

    </div>
    <div class="boxli" id="sprachen">
      <h2>Sprachen</h2>
      <ul>
        <li v-for="sprachen in cv.sprachen">{{sprachen}}</li>
        <li><router-link to="/skills" ><h3>Programmiersprachen</h3></router-link></li>
      </ul>
    </div>
    <div class="boxli" id="hobbys">
      <h2>Hobbys</h2>
      <ul >
        <li v-for="hobby in cv.hobbys">{{ hobby }}</li>
      </ul>
    </div>
    <div class="boxli" id="schulen">
      <h2>Bildung</h2>
      <ul v-for="schulen in cv.schulen">
        <line-comp thicc="2" color="true"></line-comp>
        <li>{{schulen.jahr}}</li>
        <li>{{schulen.name}}</li>
      </ul>
      <ul>

      </ul>
    </div>
    <div class="boxli" id="referenzen">
      <h2>Referenzen</h2>
    </div>
    <div class="boxli" id="nebenjobs">
      <h2>Nebenjobs</h2>
    </div>
    <div id="bottomButton">view pdf</div>
  <!--<ul>

    <li><h2>Sprachen</h2></li>
    <li><h4>Muttersprache</h4></li>
    <li>Deutsch</li>
    <li>Französisch</li>
    <li>Niederländisch</li>
    <li>C#</li>
    <li><h4>Schulkenntnisse</h4>
    <li> Englisch
    <li>Java</li>
    <li>PHP</li>
    <li>Javascript</li>
    <li>Python</li>
    <li><h4>Privatkenntnisse</h4></li>
    <li>Vue.js</li>
    <li>"XML"</li>
    <br/>
    <li><h2>Schulbildung</h2></li>
    <li>2016-2020: bwd Bern / gibb </li>
    <li>2015-2016: 10.Schuljahr, BVS Biel</li>
  </ul> -->
  </div>
</template>

<script>
  import Line from './lineType'
  import Arc from './arcType'
    export default {
        name: "cvComponent",
      data () {
        return {
          cv: {
            personalien: {
              titleName: 'Name:',
              name: 'Girardin',
              titleVorname: 'Vorname:',
              vorname: 'Cédric Henri Rudi',
              titleGeburt: 'Geburt:',
              geburt: '16.02.2000',
              titleStrasse: 'Strasse:',
              strasse: 'Oberdorf 28',
              titleOrt: 'Ort:',
              ort: '3257 Ammerzwil',
              titleHeimat: 'Heimasort:',
              heimat: 'Le Bémont JU',
              titleNation: 'Nationalität:',
              nation: 'Schweiz / Belgien',
              titleEltern: 'Eltern:',
              eltern: 'Jean Girardin, Els Vanlangenaeker',
              titleGeschwister: 'Geschwister:',
              geschwister: 'Philippe , Laura , Victor '

            },
            sprachen: {
              titleMutter: 'Muttersprachen:',
                deutsch: 'Deutsch',
              title1: ' ',
                franz: 'Französisch',
              title2: ' ',
                niederländisch: 'Niederländisch',
              title3: ' ',
                titleLeer: ' ',
              titleSchule: 'Schulkenntnisse:',
                englisch: 'Englisch'
            },
            schulen: {
              ims: {
                jahr: '2016-2020',
                name: 'IMS, bwd Bern'
              },
              gibb: {
                jahr: '2016-2019',
                name: 'gibb'
              },
              bvs: {
                jahr: '2015-2016',
                name: '10.Schuljahr, BVS Biel'
              },
              sekunda: {
                jahr: '2012-2015',
                name: 'Sekundarschule, Rapperswil BE'
              },
              prima: {
                jahr: '2006-2012',
                name: 'Primarschule, Gde. Grossafoltern'
              }

            },
            hobbys: {
              smash: 'Smash?',
              reisen: 'Reisen',
              programmieren: 'Programmieren',
              serien: 'Serien..schauen ka',
              ka: 'Ha schüsch kenni hobbys me..'
            }

          }
        }
      },
      components: {
        'line-comp' : Line,
        'arc-comp' : Arc,
      },
    }
</script>

<style scoped>
  ul {
    list-style: none;
    text-align: left;
    color: white;
  }
  li{
    padding: 5px;
    font-size: 120%;
  }
  a {
    color: white;
    font-style:italic;
  }
  #bottomButton {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 40px;
    display: block;
    z-index: 1;
    color: white;
    font-size: 120%;
    border-radius: 10px;
    padding: 15px;
    background-color: #14171a;
  }
  .cvGrid {
    display: grid;
    grid-template-columns: repeat(3, 33%);

    margin: 5%;
  }
  .boxli {
    margin: 10px;
    padding: 20px;
    transition: background 0.7s ease, color 1s ease, transform .5s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  }
  .boxli h2 {
    display: flex;
    color: white;
    align-items: center;
    margin: 0;
  }
  .boxli h2::before,
  .boxli h2::after {
    content: "";
    background: white;
    height: .1em;
    margin: 0 1em;
    flex: 1;

  }
  .boxli:hover {
    transform: scale(0.95);

  }
  .boxli:hover ul {
    background-color: rgba(0,0,0,0.5);
    border-radius: 10px;
  }

  #personalien {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;


    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <circle opacity="0.4" cx="5" cy="5" r="4"  fill="white" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #8bd081;

  }
  #personalien:hover {
    background: url("../assets/asshole1.png") center center no-repeat;
  }
  #personalien ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  #sprachen {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <path opacity="0.2" stroke-width="3" stroke-linecap="round" stroke="white" d="M 10,10 L 30,30 M 30,10 L 10,30" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #77d0a7;
  }
#sprachen:hover {
  background: url("../assets/language.jpg") center center no-repeat;
}

  #sprachen ul {
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }

  #schulen {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;

    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <rect x="10" y="10" width="15" height="15" stroke="white" opacity="0.2" fill="transparent" stroke-width="5"/> \
  </svg>');
    background-size: 50px 50px;
    background-color: #75b76c;
  }
  #schulen:hover {
    background: url("../assets/learn-new-language.jpg") center center no-repeat;
  }
  #schulen ul {
    margin: 0;
    display: grid;
    grid-template-columns:1% 29% 80% ;
  }

  #hobbys {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <path d="M5,50 L35,5 L67,50 z" fill="none" stroke="white" stroke-width="2" opacity="0.2" stroke-linejoin="round" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #42b883;
  }
  #hobbys:hover {
    background: url("../assets/darkStreet.jpg") center center no-repeat;
  }
  #referenzen{
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <circle cx="50" cy="50" r="19" fill="#fff" opacity="0.2" />\
    <circle cx="50" cy="50" r="15" fill="#47cf95"/> \
  </svg>');
    background-size: 50px 50px;
    background-color: #47cf95;
  }
  #nebenjobs{
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 5;
    background: url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">\
    <rect x="10" transform="rotate(45deg)" y="10" width="15" height="15"  opacity="0.5" fill="white" /> \
  </svg>');
    background-size: 50px 50px;
    background-color: #afd04f;
  }

  @media screen and (max-width: 900px) {
    .cvGrid {
      margin: 0;
    }
    .boxli {
      margin: 5px;
      padding: 10px;

    }
    ul {
      margin: 0;
      padding: 0;
    }

    #personalien {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    #sprachen {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 3;
      grid-row-end: 4;
    }
    #schulen {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 4;
      grid-row-end: 8;
    }
    #hobbys {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 8;
      grid-row-end: 9;
    }
    #referenzen {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 9;
      grid-row-end: 11;
    }
    #nebenjobs {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 11;
      grid-row-end: 13;
    }
  }



</style>
