<template>
  <div class="menu-wrapper">
    <!-- ปุ่ม 3 ขีด -->
    <div class="menu-btn" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- เมนูหมวด -->
    <div v-if="open" class="menu-box">
      <div @click="select('all')">ทั้งหมด</div>
      <div @click="select('jp')">มังงะญี่ปุ่น</div>
      <div @click="select('kr')">มังงะเกาหลี</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryMenu',
  data() {
    return {
      open: false
    }
  },
  methods: {
    select(type) {
      this.$emit('change', type)
      this.open = false
    }
  }
}
</script>

<style scoped>
.menu-wrapper {
  position: absolute;
  top: 20px;
  right: 20px;
}

.menu-btn {
  width: 40px;
  height: 40px;
  background: #000;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 8px;
  cursor: pointer;
}

.menu-btn span {
  height: 2px;
  background: #fff;
}

.menu-box {
  background: #000;
  border: 1px solid #444;
  margin-top: 6px;
}

.menu-box div {
  padding: 10px;
  cursor: pointer;
}

.menu-box div:hover {
  background: #222;
}
</style>
