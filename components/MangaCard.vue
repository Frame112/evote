<template>
  <router-link :to="link" class="card">
    <img :src="image" :alt="title" />
    <div class="title">{{ title }}</div>
  </router-link>
</template>

<script>
export default {
  name: 'MangaCard',
  props: {
    title: String,
    image: String,
    link: String
  }
}
</script>

<style scoped>
.card {
  background: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(255,255,255,0.2);
}

.card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.title {
  padding: 10px;
  text-align: center;
  background: #000;
}
</style>
