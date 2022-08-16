<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal class="bg-brown-9 text-amber-5" height-hint="98">
      <q-toolbar>
        <!-- 左側抽屜 -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-btn-group outline>
          <q-btn to="/" outline color="amber-5" icon="home" label="首頁" />
          <q-btn to="/aboutpage" outline color="amber-5" icon="auto_awesome" label="關於晶糸" />
          <!-- <q-btn to="/insㄋtructionspage" outline color="amber-5" label="使用說明" /> -->
        </q-btn-group>

        <div class="col text-center text-weight-bold">
        <b>晶 ✧ 糸</b>
        </div>

        <!-- logo圖 -->
        <!-- <q-toolbar-title class="col">
          <q-avatar>
            <img src="../img/JM_logo.svg">
          </q-avatar>
        </q-toolbar-title> -->

        <q-btn-group outline>
          <q-btn to="/signup" outline color="amber-5" icon="login" label="註冊" />
          <q-btn to="/login" outline color="amber-5" icon="person" label="登入" />
          <q-btn to="" outline color="amber-5" icon="shopping_cart" label="購物車" />
          <q-btn outline color="amber-5" icon="logout" label="登出" />
        </q-btn-group>

        <!-- 右側抽屜 -->
        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>

    </q-header>

    <!-- 左側抽屜 -->
    <q-drawer v-model="leftDrawerOpen"  side="left" overlay bordered elevated>
      <!-- 放商品分類 -->

    </q-drawer>

        <!-- 右側抽屜 -->
    <!-- <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer reveal class="bg-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../img/JM_logo.svg">
          </q-avatar>
          <div>晶糸(下)</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
