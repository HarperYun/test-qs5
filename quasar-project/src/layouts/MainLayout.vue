<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal class="bg-brown-9 text-amber-5" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="../img/JM_logo.svg">
          </q-avatar>
          晶糸(上)
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-btn-group outline>
      <q-btn outline color="amber-5" label="首頁" />
      <q-btn outline color="amber-5" label="關於" />
      <q-btn outline color="amber-5" label="使用說明" />
      </q-btn-group>

    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
      登入 | 註冊
      <q-field
        label="帳號"
        >
        <q-input v-model="model" />
      </q-field>

      <q-field
        label="密碼"
        >
        <q-input v-model="model" />
      </q-field>

      <div class="q-pa-md q-gutter-sm">
        <q-btn color="brown-5" label="確認" />
        <q-btn color="white" text-color="black" label="取消" />
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-10 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../img/JM_logo.svg">
          </q-avatar>
          <div>晶糸(下)</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

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
