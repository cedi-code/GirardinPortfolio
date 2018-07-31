import Vue from 'vue'
import Router from 'vue-router'

import TimeLine from '@/components/TimeLine'
import CV from '@/components/cvComponent'
import Skills from '@/components/skillsComponent'
import work from '@/components/workInProgress'
import intro from '@/components/Intro'

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
      name: 'Portfolio',
      component: intro
    },
    {
      path: '/skills',
      name: 'Fähigkeiten',
      component: Skills
    }

  ]
})
