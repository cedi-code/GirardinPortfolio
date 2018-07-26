<template>
  <div class="content">
    <h1>Skills</h1>

    <ul>
      <li v-for="skill in skills">
        <stat-circle v-bind:link="skill.link" v-bind:percentage="skill.percent">{{skill.title}}</stat-circle>
      </li>
    </ul>




  </div>




</template>

<script>
  import CircleComponent from './CircleProgressBar'
    export default {
      name: "skillsComponent",
      data () {
        return {
          skills: {
            java: {
              percent: 80,
              title: 'Java',
              link: 'projects',
              img: '',
              type: 'backend',
              language: true
            },
            csharp: {
              percent: 90,
              title: 'C#',
              link: '',
              img: '',
              type: 'backend',
              language: true
            },
            php: {
              percent: 70,
              title: 'php',
              link: '',
              img: '',
              type: 'backend',
              language: true
            },
            python: {
              percent: 60,
              title: 'Python',
              link: 'none',
              img: '',
              type: 'backend',
              language: true
            },
            js: {
              percent: 60,
              title: 'Javascript',
              link: '',
              img: '',
              type: 'frontend',
              language: false
            },
            vue: {
              percent: 50,
              title: 'Vue.js',
              link: 'none',
              img: '',
              type: 'frontend',
              language: false
            },
            jquery: {
              percent: 70,
              title: 'jQuery',
              link: '',
              img: '',
              type: 'frontend',
              language: false
            },
            android: {
              percent: 75,
              title: 'Android',
              link: '',
              img: '',
              type: 'backend',
              language: false
            },
            github: {
              percent: 60,
              title: 'Github',
              link: '',
              img: '',
              type: 'platform',
              language: false
            },
            laravel: {
              percent: 40,
              title: 'Laravel',
              link: '',
              img: '',
              type: 'mvc',
              language: false
            },
            sql: {
              percent: 70,
              title: 'SQL',
              link: '',
              img: '',
              type: 'script',
              language: false
            },
            windows: {
              percent: 85,
              title: 'Windows',
              link: 'none',
              img: '',
              type: 'betriebsystem',
              language: false
            },
            linux: {
              percent: 45,
              title: 'Linux',
              link: 'none',
              img: '',
              type: 'betriebsystem',
              language: false
            },
            macOS: {
              percent: 20,
              title: 'macOS',
              link: 'none',
              img: '',
              type: 'betriebsystem',
              language: false
            },
            bash: {
              percent: 30,
              title: 'bash',
              link: 'none',
              img: '',
              type: 'script',
              language: false
            },
            abacus: {
              percent: 50,
              title: 'Abacus',
              link: 'none',
              img: '',
              type: 'programm',
              language: false
            },
            abap: {
              percent: 30,
              title: 'ABAP',
              link: 'none',
              img: '',
              type: 'backend',
              language: false
            },
            sap: {
              percent: 40,
              title: 'SAP',
              link: 'none',
              img: '',
              type: 'programm',
              language: false
            },
            photoshop: {
              percent: 50,
              title: 'Photoshop',
              link: 'none',
              img: '',
              type: 'design, programm',
              language: false
            },
            illustator: {
              percent: 75,
              title: 'Illustator',
              link: '',
              img: '',
              type: 'design, programm',
              language: false
            },
            aftereffects: {
              percent: 60,
              title: 'After Effects',
              link: '',
              img: '',
              type: 'design, programm',
              language: false
            }


          }
        }
      },
      components: {
        'stat-circle' : CircleComponent
      },
      mounted: function() {
        var $statCircle = document.querySelectorAll(".stat-circle circle");
        for (var i = 0; i < $statCircle.length; i++) {
          var p = parseFloat($statCircle[i].dataset.percentage);
          var off = -51 -((51 / 100) * p);
          $statCircle[i].style.strokeDashoffset = off;
          /*new TweenMax.to($statCircle[i], .8, {
            strokeDashoffset: off
          });*/
        }
      }
    }
</script>

<style scoped lang="scss">
 /* https://github.com/webpack-contrib/sass-loader */
 ul {
   margin: 0;
   list-style: none;
   padding-top: 5px;

 }
 li {
   float: Left;
 }

</style>
