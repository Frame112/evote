<template>
  <div class="reader-page">
    <h1 class="title">Sample Manga (Free Images)</h1>

    <div class="manga-container">
      <img
        v-for="(page, index) in pages"
        :key="index"
        :src="page"
        class="manga-page"
        alt="manga page"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MangaReader",
  data() {
    return {
      // ภาพสไตล์การ์ตูน / comic ฟรี (ไม่ติดลิขสิทธิ์)
      pages: [
        "https://i.imgur.com/PQdMGHE.jpg",
        "https://i.imgur.com/ZXq4JkG.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8cj0Mg_PgxY6pgBuwZOB5iyGufXWyu5z6qA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRes9bYYYDXLq6JaczXD83AoUgC1Yi2C3KkBA&s",
        "https://cdn.pixabay.com/photo/2017/01/31/13/14/comic-2027193_1280.png"
      ]
    }
  }
}
</script>

<style scoped>
.reader-page {
  background: #000;
  min-height: 100vh;
  color: #fff;
  padding: 20px 0;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.manga-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.manga-page {
  width: 100%;
  max-width: 800px;
  margin-bottom: 10px;
  box-shadow: 0 0 10px rgba(255,255,255,0.1);
}
</style>
