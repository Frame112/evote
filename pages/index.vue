<template>
  <div class="page">
    <!-- Header -->
    <header class="header">
      เว็บอ่านมังงะ

      <div class="menu-wrapper">
        <div class="menu-btn" @click="menuOpen = !menuOpen">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div v-if="menuOpen" class="menu-box">
          <div @click="filter('jp')">มังงะญี่ปุ่น</div>
          <div @click="filter('kr')">มังงะเกาหลี</div>
          <div @click="filter('all')">ทั้งหมด</div>
        </div>
      </div>
    </header>

    <!-- ช่องค้นหา -->
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input
        type="text"
        v-model="search"
        placeholder="ค้นหามังงะ..."
      />
    </div>

    <!-- รายการมังงะ -->
    <div class="container">
      <div
        v-for="(manga, index) in filteredMangas"
        :key="index"
        class="manga-box"
      >
        <router-link :to="manga.link" class="link">
          <img :src="manga.image" :alt="manga.title" />
          <div class="manga-title">{{ manga.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MangaPage',
  data() {
    return {
      menuOpen: false,
      category: 'all',
      search: '',
      mangas: [
        { title: 'One Piece', category: 'jp', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBZh2UpzLj8efScUh-KXZcfKbIaJeF4P7uQ&s', link: 'manga' },
        { title: 'Naruto', category: 'jp', image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg', link: 'manga' },
        { title: 'Bleach', category: 'jp', image: 'https://jumpg-assets.tokyo-cdn.com/secure/title/100004/title_thumbnail_portrait_list/311788.jpg?hash=ypRnsOPrqQTWm-GBTUArRQ&expires=2145884400', link: 'manga' },
        { title: 'Demon Slayer', category: 'jp', image: 'https://jumpg-assets.tokyo-cdn.com/secure/title/100009/title_thumbnail_portrait_list/312295.jpg?hash=CKzdiOsm03ej2QTTeAXywg&expires=2145884400', link: 'manga'  },
        { title: 'Dragon Ball Super', category: 'jp', image: 'https://jumpg-assets.tokyo-cdn.com/secure/title/100012/title_thumbnail_portrait_list/312400.jpg?hash=tLuDK-BIjUMj5mEdeY2F5Q&expires=2145884400', link: 'manga'  },
        { title: 'Solo Leveling', category: 'kr', image: 'https://images-cdn.ubuy.co.in/69431a63b0ca823d3f0b43cc-solo-leveling-vol-1-comic-volume-1.jpg', link: 'manga'  },
        { title: 'Lookism', category: 'kr', image: 'https://img.online-station.net/image_content/2023/05/Lookism-%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B8%84%E0%B8%B6%E0%B8%8B%E0%B8%B6%E0%B8%A1-450x600.jpg', link: 'manga'  },
        { title: 'The God of High School', category: 'kr', image: 'https://m.media-amazon.com/images/M/MV5BODVjODVhNjgtZWZkNy00ODViLTgwMGYtZmU0ZTNkZTI3N2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', link: 'manga'  },
        { title: 'Tower of God', category: 'kr', image: 'https://m.media-amazon.com/images/M/MV5BZWQwZGY3MGItZjQ3OS00MzYxLTlmMWMtNjZiYTY2ZDk4ZjFhXkEyXkFqcGc@._V1_.jpg', link: 'manga'  }
      ]
    }
  },
  computed: {
    filteredMangas() {
      return this.mangas.filter(m =>
        (this.category === 'all' || m.category === this.category) &&
        m.title.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    filter(type) {
      this.category = type
      this.menuOpen = false
    }
  }
}
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: #111;
  color: #fff;
}

/* Header */
.header {
  position: relative;
  background: #ff4d4d;
  padding: 15px;
  font-size: 20px;
  text-align: center;
}

/* เมนู */
.menu-wrapper {
  position: absolute;
  top: 12px;
  right: 15px;
}

.menu-btn span {
  display: block;
  width: 25px;
  height: 3px;
  background: white;
  margin: 4px 0;
}

.menu-box {
  position: absolute;
  right: 0;
  top: 35px;
  background: white;
  color: black;
  border-radius: 8px;
}

.menu-box div {
  padding: 10px 15px;
  cursor: pointer;
}

.menu-box div:hover {
  background: #eee;
}

/* Search */
.search-box {
  margin: 15px;
  background: white;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  color: black;
}

.search-box input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 16px;
}

/* Manga grid */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding: 20px;
}

.manga-box {
  background: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
}

.manga-box img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.manga-title {
  padding: 10px;
  text-align: center;
  background: #000;
}
</style>
