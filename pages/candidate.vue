<template>
  <div class="login-container">
    <div class="login-box">

      <!-- หน้า Login -->
      <div v-if="!loading && !success">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          v-model="username"
        />

        <input
          type="password"
          placeholder="Password"
          v-model="password"
        />

        <button @click="login">
          ยืนยัน
        </button>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="center">
        <div class="spinner"></div>
        <p>กำลังตรวจสอบ...</p>
      </div>

      <!-- Success -->
      <div v-if="success" class="center">
        <div class="check">✔</div>
        <p>เข้าสู่ระบบสำเร็จ</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      success: false
    }
  },
  methods: {
    login() {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.success = true

        setTimeout(() => {
          this.$router.push("/")
        }, 1000)

      }, 3000)
    }
  }
}
</script>

<style scoped>
.login-container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  /* ใส่รูปพื้นหลังตรงนี้ */
  background-image: url("https://otakuusamagazine.com/wp-content/uploads/2024/06/my-hero-academia-manga-ending.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* ทำพื้นหลังมืดให้อ่านง่าย */
.login-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.login-box {
  position: relative;
  z-index: 1;
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: darkred;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

/* Spinner */
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #ddd;
  border-top: 5px solid red;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Check mark */
.check {
  font-size: 50px;
  color: lime;
  margin-bottom: 10px;
}
</style>