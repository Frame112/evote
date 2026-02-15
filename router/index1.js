import { createRouter, createWebHistory } from 'vue-router'
import Robot from '@/views/Robot.vue'
import Manga from '@/views/manga.vue'

const routes = [
  {
    path: '/robot',
    name: 'Robot',
    component: Robot
  },
  {
    path: '/manga',
    name: 'Manga',
    component: Manga
  },
  {
    path: '/',
    redirect: '/manga'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🔐 ด่านตรวจ
router.beforeEach((to, from, next) => {
  const verified = localStorage.getItem('verified')

  if (!verified && to.path !== '/Robot') {
    next('/robot')   // ยังไม่ผ่าน → ไป robot
  } else {
    next()           // ผ่านแล้ว → เข้าได้
  }
})

export default router
