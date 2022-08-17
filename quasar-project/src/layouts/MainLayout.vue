<!-- bg-brown-9 text-amber-5 -->
<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal class="bg-brown-9 text-amber-5" height-hint="98">
      <q-toolbar>
        <!-- 左側抽屜按鈕 - 放分類 -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-btn-group outline>
          <q-btn to="/" outline color="amber-5" icon="home" label="首頁" />
          <q-btn to="/aboutpage" outline color="amber-5" icon="auto_awesome" label="關於晶糸" />
          <q-btn to="/contactus" outline color="amber-5" icon="mail_outline" label="聯絡我們" />
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
          <q-btn v-if="isLogin && isAdmin" to="/admin" outline color="amber-5" icon="admin_panel_settings" label="後台管理"  />
          <q-btn v-if="!isLogin" to="/signup" outline color="amber-5" icon="login" label="註冊" />
          <q-btn v-if="!isLogin" to="/login" outline color="amber-5" icon="person" label="登入" />
          <q-btn v-if="isLogin && !isAdmin" to="/personpage" outline color="amber-5" icon="person_outline" label="會員資料" />
          <q-btn v-if="isLogin && !isAdmin" to="/lovelist" outline color="amber-5" icon="favorite" label="收藏清單" />
          <q-btn v-if="isLogin && !isAdmin" to="/cartpage" outline color="amber-5" icon="shopping_cart" label="購物車" >
            <q-badge v-if="cart > 0" rounded floating transparent color="red" label="" />
          </q-btn>
          <!-- <q-btn v-if="isLogin" to="/orderpage" outline color="amber-5" icon="article" label="訂單紀錄" /> -->
          <!-- <q-btn v-if="isLogin" to="" outline color="amber-5" icon="grade" label="評價紀錄" /> -->
          <q-btn v-if="isLogin" outline color="amber-5" icon="logout" @click="logout" label="登出" />
        </q-btn-group>

      </q-toolbar>

    </q-header>

    <!-- 左側抽屜 - 準備放商品分類 -->
    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered elevated>

      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown-9" name="brightness_low" />
            </q-item-section>

            <q-item-section>1. 天然石手鍊</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown-9" name="spa" />
            </q-item-section>

            <q-item-section>2. 蠟線編繩</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown-9" name="filter_vintage" />
            </q-item-section>

            <q-item-section>3. 布品手作</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown-9" name="cruelty_free" />
            </q-item-section>

            <q-item-section>4. 棉麻編織物</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown-9" name="emoji_nature" />
            </q-item-section>

            <q-item-section>5. 金屬線設計</q-item-section>
          </q-item>

        </q-list>
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<!-- <script>
import { ref } from 'vue'
s
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
</script> -->

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from 'src/stores/user'
import { ref } from 'vue'

const user = useUserStore()
const { logout } = user
const { isLogin, isAdmin, cart } = storeToRefs(user)

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)

// const toggleLeftDrawer = () => {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }

// const toggleRightDrawer = () => {
//   rightDrawerOpen.value = !rightDrawerOpen.value
// }

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value
}

</script>
