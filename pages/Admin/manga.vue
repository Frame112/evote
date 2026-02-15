<template>
  <div class="page">
    <header class="header">เว็บอ่านมังงะ</header>

    <div class="container">
      <div
        v-for="(manga, index) in mangas"
        :key="index"
        class="manga-box"
        @click="goToManga(manga)"
      >
        <img :src="manga.image" :alt="manga.title" />
        <div class="manga-title">{{ manga.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MangaPage',
  data() {
    return {
      mangas: [
        { title: 'มังงะเรื่องที่ 1', image: '/manga1.jpg', link: '/manga/1' },
        { title: 'มังงะเรื่องที่ 2', image: '/manga2.jpg', link: '/manga/2' },
        { title: 'มังงะเรื่องที่ 3', image: '/manga3.jpg', link: '/manga/3' },
        { title: 'มังงะเรื่องที่ 4', image: '/manga4.jpg', link: '/manga/4' },
        { title: 'มังงะเรื่องที่ 5', image: '/manga5.jpg', link: '/manga/5' }
      ]
    }
  },
  methods: {
    goToManga(manga) {
      // ถ้าใช้ Vue Router
      this.$router.push(manga.link)
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #111;
  color: #fff;
}

.header {
  padding: 20px;
  text-align: center;
  background-color: #000;
  font-size: 24px;
  font-weight: bold;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding: 30px;
  max-width: 1000px;
  margin: auto;
}

.manga-box {
  background-color: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.manga-box:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.manga-box img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.manga-title {
  padding: 10px;
  text-align: center;
  font-size: 16px;
  background-color: #000;
}
</style>
