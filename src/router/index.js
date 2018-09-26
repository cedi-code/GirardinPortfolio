import Vue from 'vue'
import Router from 'vue-router'

import TimeLine from '@/components/TimeLine'
import CV from '@/components/cvComponent'
import Skills from '@/components/skillsComponent'
import work from '@/components/workInProgress'
import intro from '@/components/Intro'
import Hobbys from '@/components/Hobbys'
import preview from '@/components/Preview2'
import preview2 from '@/components/Preview'

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
      component: preview
    },
    {
      path: '/skills',
      name: 'Fähigkeiten',
      component: Skills
    },
    {
      path: '/hobbys',
      name: 'Hobbys',
      component: Hobbys
    },
    {
      path: '/preview',
      name: 'Portfolio',
      component: preview

    },
    {
      path: '/oldpreview',
      name: 'Portfolio',
      component: preview2

    }

  ]
})
