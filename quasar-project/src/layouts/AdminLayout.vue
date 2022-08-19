<!-- 底色 blue-grey-10 字色 teal-2 -->
<!-- col-xs-6 col-sm-4 col-md-3 -->

<template>
  <q-layout view="hHh lpR fFf" style="background: rgb(236, 246, 249);">

    <q-header reveal class="bg-blue-grey-10 text-teal-2" height-hint="98">
      <q-toolbar>
        <!-- 左側抽屜按鈕 -->
        <q-btn dense flat round icon="menu" class="blue-grey-13" @click="toggleLeftDrawer" />

        <q-btn-group outline>
          <q-btn to="/" outline color="teal-2" icon="home" label="首頁" />
        </q-btn-group>

        <div class="col text-center text-weight-bold">
        <b> </b>
        </div>

        <q-btn-group outline>
          <q-btn to="/admin" outline color="teal-2" icon="admin_panel_settings" label="後台管理"  />
          <q-btn outline color="teal-2" icon="logout" @click="logout" label="登出" />
        </q-btn-group>

      </q-toolbar>
    </q-header>

    <!-- 左側抽屜內容 -->
    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered elevated show-if-above>

      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered>
          <q-item clickable v-ripple to="/admin/memberspage">
            <q-item-section avatar>
              <q-icon color="brown-9" name="restaurant" />
            </q-item-section>

            <q-item-section>1. 會員管理</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/itemspage">
            <q-item-section avatar>
              <q-icon color="brown-9" name="local_cafe" />
            </q-item-section>

            <q-item-section>2. 商品管理</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/orderspage">
            <q-item-section avatar>
              <q-icon color="brown-9" name="ramen_dining" />
            </q-item-section>

            <q-item-section>3. 訂單管理</q-item-section>
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
