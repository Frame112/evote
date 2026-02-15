<template>
  <v-app id="dlayout">
    <!-- App Bar สีดำ -->
    <v-app-bar color="black" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>
        <h3>MangaFAM</h3>
      </v-app-bar-title>
    </v-app-bar>

    <!-- Navigation Drawer สีดำ -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      color="black"
      dark
    >
      <v-list class="mt-3" nav>
        <v-list-item to="/" color="primary">
          <template #prepend>
            <v-icon class="fas fa-home"></v-icon>
          </template>
          <v-list-item-title class="font-weight-bold">
            หน้าหลัก
          </v-list-item-title>
        </v-list-item>

        <v-list-item to="/candidate" color="primary">
          <template #prepend>
            <v-icon class="fas fa-users"></v-icon>
          </template>
          <v-list-item-title class="font-weight-bold">
            Loing
          </v-list-item-title>
        </v-list-item>

        <v-list-item to="/manga" color="primary">
          <template #prepend>
            <v-icon class="fas fa-book"></v-icon>
          </template>
          <v-list-item-title class="font-weight-bold">
            Manga
          </v-list-item-title>
        </v-list-item>

        
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="bg-grey-lighten-2">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>
