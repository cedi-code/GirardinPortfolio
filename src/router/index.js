import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TimeLine from '@/components/TimeLine'
import CV from '@/components/cvComponent'
import Skills from '@/components/skillsComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/projects',
      name: 'Projekte',
      component: TimeLine
    },
    {
      path: '/cv',
      name: 'Lebenslauf',
      component: CV
    },
    {
      path: '/',
      name: 'Home',
      component: TimeLine
    },
    {
      path: '/skills',
      name: 'Fähigkeiten',
      component: Skills
    }

  ]
})
