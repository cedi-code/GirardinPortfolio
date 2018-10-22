<template>
  <div class="content">


    <div id="filters">

          <label  class="switch" >
            <input type="checkbox" class="check" v-on:click="ugly(2)" v-bind:checked="filters[2].isChecked" >
            <div class="slider"></div>
            <span class="typeName" >order</span>
          </label>
          <label  class="switch" >
            <input type="checkbox" class="check" v-on:click="ugly(0)" v-bind:checked="filters[0].isChecked" >
            <div class="slider"></div>
            <span class="typeName">best</span>
          </label>
          <label class="switch" >
            <input type="checkbox" class="check"  v-on:click="ugly(1)" v-bind:checked="filters[1].isChecked">
            <div class="slider"></div>
            <span class="typeName">worst</span>
          </label>
          <label class="switch" >
            <input type="checkbox" class="check"  v-on:click="changePercange()" >
            <div class="slider"></div>
            <span class="typeName">Percentage</span>
          </label>
            <button v-on:click="shuffle" class="sbutton switch">shuffle</button>


    </div>
    <div id="expandFilter" v-on:click="expandFilters()">
      <i class="downArrow"></i>
    </div>
    <div id="elements">
      <transition-group name="flip-list" tag="ul">
        <ul v-for="group in dataSkills" v-bind:key="group.groupTitle" class="clearfix">
          <h2>{{group.groupTitle}}</h2>
          <transition-group name="flip-list" tag="span">
            <li v-for="skill in group.skills" v-bind:key="skill.id">
              <stat-circle v-bind:img-type="skill.img" v-bind:show-percange="percantegeOn" v-bind:status="skill.status" v-bind:link="skill.link" v-bind:percentage="skill.percent">{{skill.title}}</stat-circle>
            </li>
          </transition-group>
        </ul>
      </transition-group>

    </div>

  </div>




</template>

<script>
  import CircleComponent from './CircleProgressBar'
    export default {
      name: "skillsComponent",
      methods: {
        ugly: function(id) {
          this.filters[id].isChecked = !this.filters[id].isChecked;
          console.log(this.filters[2].isChecked)
          if(this.filters[2].isChecked) {
            this.groupByType()
          }else {
            this.back()
          }
          if(this.filters[0].isChecked && id != 1) {
            this.orderBy(this.filters[0].param1,this.filters[0].param2);
            this.filters[1].isChecked = false;
          }
          if(this.filters[1].isChecked) {
            this.orderBy(this.filters[1].param1,this.filters[1].param2);
            this.filters[0].isChecked = false;
          }
          if(this.expanded) {
            this.expandFilters()
          }


        },
        changePercange: function() {
          this.percantegeOn = !this.percantegeOn;
        },
        // https://lodash.com/docs/4.17.10
        shuffle: function () {
          this.filters[0].isChecked = false;
            this.filters[1].isChecked = false;
          this.dataSkills["0"].skills = _.shuffle(this.dataSkills["0"].skills)
          for(var i = 1; i < this.dataSkills.length; i++) {
            this.dataSkills[ i ].skills = _.shuffle(this.dataSkills[i].skills)

          }
          if(this.expanded) {
            this.expandFilters()
          }

        },
        orderBy: function (k,type) {
          this.dataSkills["0"].skills = _.orderBy(this.dataSkills["0"].skills, k, type)
          for(var i = 1; i < this.dataSkills.length; i++) {
            this.dataSkills[i].skills = _.orderBy(this.dataSkills[i].skills, k, type)

          }
        },
        back: function () {
          Object.assign(this.$data.dataSkills, this.$options.data().dataSkills)
          console.log(this.dataSkills["0"])

        },
        groupByType: function(){
          this.back()
          this.dataSkills = _.chain(this.dataSkills["0"].skills)
            .groupBy("type").toPairs()
            .map(function(currentItem) {
              return _.zipObject(["groupTitle", "skills"], currentItem);
            })
            .value(),
          console.log(this.dataSkills)
        },
        setCicles: function () {
          var $statCircle = document.querySelectorAll(".stat-circle circle");
          for (var i = 0; i < $statCircle.length; i++) {
            var p = parseFloat($statCircle[i].dataset.percentage);
            var off = -51 -((51 / 100) * p);
            $statCircle[i].style.strokeDashoffset = off;
            /*new TweenMax.to($statCircle[i], .8, {
              strokeDashoffset: off
            });*/
          }
        },
        expandFilters: function () {
          if(this.expanded) {
            document.getElementById('filters').style.transform = "translateX(-100%)";
            document.getElementById('expandFilter').style.left = '0%';

          }else {
            document.getElementById('filters').style.transform = "translateX(0%)";
            document.getElementById('expandFilter').style.left = '90%';
          }
          this.expanded = !this.expanded;

        } ,
        addChecks: function() {
          if(screen.width < 900) {

             this.ugly(2)
          }
        }
      },
      created() {
        this.addChecks()
      },
      components: {
        'stat-circle' : CircleComponent
      },
      mounted: function() {
        this.setCicles()
      },
      data () {
        return {
          expanded: false,
          checked: false,
          percantegeOn: false,
          filters: [
            {
              isChecked: false,
              param1: 'percent',
              param2: 'desc'
            },
             {
              isChecked: false,
              param1: 'percent',
              param2: 'asc'
            },
             {
              isChecked: false,
            }
          ],


          dataSkills: {
            0: {
              groupTitle: 'All',
              skills: {
                  java: {
                    id: 0,
                    percent: 80,
                    title: 'Java',
                    link: '/projects',
                    img: require('../assets/icons/skills/java.png'),
                    type: 'Back-End',
                    language: true,
                    status: 'Stark'
                  },
                  csharp: {
                    id: 1,
                    percent: 85,
                    title: 'C#',
                    link: 'none',
                    img: require('../assets/icons/skills/c-logo.png'),
                    type: 'Back-End',
                    language: true,
                    status: 'Stark'
                  },
                  php: {
                    id: 2,
                    percent: 70,
                    title: 'php',
                    link: 'https://github.com/cedi-code/Projekt_Bilder-DB',
                    img: require('../assets/icons/skills/php.png'),
                    type: 'Back-End',
                    language: true,
                    status: 'Erfahren'
                  },
                  python: {
                    id: 3,
                    percent: 30,
                    title: 'Python',
                    link: 'none',
                    img: require('../assets/icons/skills/python.png'),
                    type: 'Back-End',
                    language: true,
                    status: 'Neu'
                  },
                  js: {
                    id: 4,
                    percent: 65,
                    title: 'Javascript',
                    link: 'http://cedilabs.de/memberVisit.php?uid=2',
                    img: require('../assets/icons/skills/javascript2.svg.png'),
                    type: 'Front-End',
                    language: false,
                    status: 'Fähig'
                  },
                  vue: {
                    id: 5,
                    percent: 55,
                    title: 'Vue.js',
                    link: 'none',
                    type: 'Front-End',
                    language: false,
                    status: 'Amateur'
                  },
                  css: {
                    id: 21,
                    percent: 80,
                    title: 'CSS',
                    link: 'http://cedilabs.de/memberVisit.php?uid=2',
                    img: require('../assets/icons/skills/css-3.png'),
                    type: 'Front-End',
                    language: false,
                    status: 'Geschickt'
                  },
                  jquery: {
                    id: 6,
                    percent: 75,
                    title: 'jQuery',
                    link: 'http://cedilabs.de/memberVisit.php?uid=2',
                    img: require('../assets/icons/skills/jquery_logo_001.jpg'),
                    type: 'Front-End',
                    language: false,
                    status: 'Fähig'
                  },
                  android: {
                    id: 7,
                    percent: 75,
                    title: 'Android',
                    link: 'https://github.com/cedi-code/FlashCodeGit2.0',
                    img: require('../assets/icons/Android_Studio_icon.svg.png'),
                    type: 'Back-End',
                    language: false,
                    status: 'Stark'
                  },
                  github: {
                    id: 8,
                    percent: 60,
                    title: 'Github',
                    link: 'https://github.com/cedi-code',
                    img: require('../assets/icons/skills/github-logo.png'),
                    type: 'Platform',
                    language: false,
                    status: 'Bekannt'
                  },
                  laravel: {
                    id: 9,
                    percent: 50,
                    title: 'Laravel',
                    link: 'https://github.com/cedi-code/coffeefyAPI',
                    img: require('../assets/icons/skills/LaravelLogo.png'),
                    type: 'MVC',
                    language: false,
                    status: 'Bekannt'
                  },
                  bbcmvc: {
                    id: 22,
                    percent: 80,
                    title: 'Bbc MVC',
                    link: 'https://github.com/cedi-code/10ner',
                    img: require('../assets/icons/ict.png'),
                    type: 'MVC',
                    language: false,
                    status: 'Erfahren'

                  },
                  sql: {
                    id: 10,
                    percent: 75,
                    title: 'SQL',
                    link: 'none',
                    img: require('../assets/icons/skills/sql-file-format-symbol.png'),
                    type: 'Script',
                    language: false,
                    status: 'Erfahren'
                  },
                  windows: {
                    id: 11,
                    percent: 70,
                    title: 'Windows',
                    link: 'none',
                    img: require('../assets/icons/skills/windows-logo-silhouette.png'),
                    type: 'Operating system',
                    language: false,
                    status: 'Fähig'

                  },
                  linux: {
                    id: 12,
                    percent: 25,
                    title: 'Linux',
                    link: 'none',
                    img: require('../assets/icons/skills/linux-logo.png'),
                    type: 'Operating system',
                    language: false,
                    status: 'Bekannt'
                  },
                  macOS: {
                    id: 13,
                    percent: 40,
                    title: 'iOS',
                    link: 'none',
                    img: require('../assets/icons/skills/ios-logo.png'),
                    type: 'Operating system',
                    language: false,
                    status: 'Bekannt'
                  },
                  bash: {
                    id: 14,
                    percent: 30,
                    title: 'bash',
                    link: 'none',
                    img: require('../assets/icons/skills/bash.png'),
                    type: 'Script',
                    language: true,
                    status: 'Neu'
                  },
                  abacus: {
                    id: 15,
                    percent: 50,
                    title: 'Abacus',
                    link: 'https://data.cedricgirardin.ch/papers/certificates/abacus?request=abacus-zertifikat',
                    img: require('../assets/icons/skills/Abacus-Logo.jpg'),
                    type: 'Applications & Design',
                    language: false,
                    status: 'Bekannt'
                  },
                  abap: {
                    id: 16,
                    percent: 35,
                    title: 'ABAP',
                    link: 'https://data.cedricgirardin.ch/papers/certificates/abap?request=abap-zertifikat',
                    img: require('../assets/icons/skills/abap.jpeg'),
                    type: 'Back-End',
                    language: true,
                    status: 'Bekannt'
                  },
                  sap: {
                    id: 17,
                    percent: 20,
                    title: 'SAP',
                    link: 'https://data.cedricgirardin.ch/papers/certificates/sap?request=sap-zertifikat',
                    img: require('../assets/icons/skills/sap_logo.svg.png'),
                    type: 'Applications & Design',
                    language: false,
                    status: 'Bekannt'
                  },
                office: {
                  id: 23,
                  percent: 70,
                  title: 'Office',
                  link: 'https://data.cedricgirardin.ch/papers/%C3%BCK/m302?request=üK-M302',
                  img: require('../assets/icons/skills/office.png'),
                  type: 'Applications & Design',
                  language: false,
                  status: 'Geschickt'
                },
                  photoshop: {
                    id: 18,
                    percent: 45,
                    title: 'Photoshop',
                    link: 'none',
                    img: require('../assets/icons/skills/Photoshop_CC_icon.png'),
                    type: 'Applications & Design',
                    language: false,
                    status: 'Amateur'
                  },
                  illustator: {
                    id: 19,
                    percent: 70,
                    title: 'Illustator',
                    link: 'none',
                    img: require('../assets/icons/skills/1200px-Adobe_Illustrator_CC_icon.svg.png'),
                    type: 'Applications & Design',
                    language: false,
                    status: 'Geschickt'
                  },
                  aftereffects: {
                    id: 20,
                    percent: 60,
                    title: 'After Effects',
                    link: 'https://www.youtube.com/channel/UCH7cDH4xKTpe1tJUZh3narw/videos?view_as=subscriber',
                    img: require('../assets/icons/skills/2000px-Adobe_After_Effects_CC_icon.svg.png'),
                    type: 'Applications & Design',
                    language: false,
                    status: 'Geschickt'
                  },
              }
            }

          }
        }
      }

    }
</script>

<style scoped lang="scss">
 /* https://github.com/webpack-contrib/sass-loader */
  .downArrow {
    border: solid #74b16b;
    border-width: 0 5px 5px 0;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
 #expandFilter {
   display: none;
   transition: left 0.5s ease;

 }
 .content {
   display: table;
   float: left;
 }

 #elements {
   width: 100%;
   height:88vh;
   overflow-y:scroll;
 }

  .sbutton {
    background-color: #e9ffe7;
    color: black;
    width: 100px !important;
    height: 50px !important;
    border: none;
    float: left;
    margin: 5px;
    font-weight: bold;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    text-align: center;
    text-transform: uppercase;
  }
  .sbutton:hover {
    background-color: #9de793;
    transform: scale(1.1);
  }
  .sbutton:active {
    background-color: #8bd081;
    transform: scale(0.7);
  }
 #filters {
   display: table-cell;
   width: 25%;
   text-align: center;
   padding-right: 5%;
   vertical-align: middle;
   padding-bottom: 10%;
   background-color: #3a3a3a;
   color: white;
   transition: transform 0.5s ease;
 }

 #filters button{
    display: block;
 }

 h2 {
   text-align: left;
   letter-spacing: 10px;
   display: flex;
   align-items: center;

 }
 h2::before,
 h2::after {
   content: "";
   background: black;
   height: .1em;
   margin: 0 1em;
 }
 h2::before {
   flex: .1;
 }
 h2::after {
   flex: .9;
 }
 ul {
   margin: 0;
   list-style: none;
   padding-top: 5px;


 }
 .clearfix::after {
   content: "";
   clear: both;
   display: table;
 }
 li {
   float: left;
 }
 .switch {
   position: relative;
   display: block;
   margin: 10%;
   width: 60px;
   height: 34px;
 }
 .switch input {
   display:none;
 }

 .slider {
   position: absolute;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #ccc;
   -webkit-transition: .4s;
   transition: .4s;
   border-radius: 34px;

 }
 .slider:before {
   position: absolute;
   content: "";
   height: 26px;
   width: 26px;
   left: 4px;
   bottom: 4px;
   background-color: white;
   -webkit-transition: .4s;
   transition: .4s;
   border-radius: 50%;
 }
 .flip-list-move {
   transition: transform 1s;
 }
 .flip-list-enter-active, .flip-list-leave-active {
   transition: all .5s ease;
 }
 .flip-list-enter, .flip-list-leave-to
   /* .component-fade-leave-active below version 2.1.8 */ {
   transform: translateY(50%);
   opacity: 0;
 }
 input:checked + .slider:before {
   -webkit-transform: translateX(26px);
   -ms-transform: translateX(26px);
   transform: translateX(26px);

 }
 input:checked + .slider {
   background-color: #8bd081;

 }
 .typeName {
   line-height: 35px;
   padding-left: 80px;
   font-size: 130%;
 }
 @media screen and (max-width: 1100px) {
   #elements {
     overflow: auto;


   }
   #expandFilter {
     display: table-cell;
     position: fixed;
     z-index: 2;
     left: 0px;
     padding-top: 5%;

   }
   ul {
     padding: 2% !important;
   }
   #filters {
     width: 100%;
     height: 100%;
     position: fixed; /* Stay in place */
     z-index: 1;
     transform: translateX(-100%);

   }
 }

</style>
