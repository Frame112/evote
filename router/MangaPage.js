export default {
  name: 'MangaPage',
  data() {
    return {
      menuOpen: false,
      category: 'all',
      search: '',
      mangas: [
        {
          title: 'One Piece',
          category: 'jp',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBZh2UpzLj8efScUh-KXZcfKbIaJeF4P7uQ&s',
          link: '/manga/onepiece'
        },
        {
          title: 'Naruto',
          category: 'jp',
          image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg',
          link: '/manga/naruto'
        },
        {
          title: 'Bleach',
          category: 'jp',
          image: 'https://jumpg-assets.tokyo-cdn.com/secure/title/100004/title_thumbnail_portrait_list/311788.jpg',
          link: '/manga/bleach'
        },
        {
          title: 'Demon Slayer',
          category: 'jp',
          image: 'https://jumpg-assets.tokyo-cdn.com/secure/title/100009/title_thumbnail_portrait_list/312295.jpg',
          link: '/manga/demon'
        },
        {
          title: 'Dragon Ball Super',
          category: 'jp',
          image: 'https://jumpg-assets.tokyo-cdn.com/secure/title/100012/title_thumbnail_portrait_list/312400.jpg',
          link: '/manga/dbs'
        },
        {
          title: 'Solo Leveling',
          category: 'kr',
          image: 'https://images-cdn.ubuy.co.in/69431a63b0ca823d3f0b43cc-solo-leveling-vol-1-comic-volume-1.jpg',
          link: '/manga/solo'
        },
        {
          title: 'Lookism',
          category: 'kr',
          image: 'https://img.online-station.net/image_content/2023/05/Lookism-%E0%B8%A5%E0%B8%B8%E0%B8%81%E0%B8%84%E0%B8%B6%E0%B8%8B%E0%B8%B6%E0%B8%A1-450x600.jpg',
          link: '/manga/lookism'
        },
        {
          title: 'The God of High School',
          category: 'kr',
          image: 'https://m.media-amazon.com/images/M/MV5BODVjODVhNjgtZWZkNy00ODViLTgwMGYtZmU0ZTNkZTI3N2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
          link: '/manga/goh'
        },
        {
          title: 'Tower of God',
          category: 'kr',
          image: 'https://m.media-amazon.com/images/M/MV5BZWQwZGY3MGItZjQ3OS00MzYxLTlmMWMtNjZiYTY2ZDk4ZjFhXkEyXkFqcGc@._V1_.jpg',
          link: '/manga/tog'
        }
      ]
    }
  },
  computed: {
    filteredMangas() {
      let result =
        this.category === 'all'
          ? this.mangas
          : this.mangas.filter(m => m.category === this.category)

      if (this.search) {
        result = result.filter(m =>
          m.title.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return result
    }
  },
  methods: {
    filter(type) {
      this.category = type
      this.menuOpen = false
    }
  }
}
