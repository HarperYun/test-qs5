<!-- bg-brown-9 text-amber-5 -->
<!-- col-xs-6 col-sm-4 col-md-3 -->
<style>
html {
  background-color: rgb(255, 251, 237);
  /* background-color: rgb(236, 246, 249); */
}

.footerword {
  padding: 1%;
}

.slogen {
  display: none;
}

.rwdmain {
  display: none;
}

div span {
  cursor: pointer;
}

@media(min-width: 767px) {
  .slogen {
    display: none;
  }

  .rwdmain {
    display: block;
  }

  .rwdmd {
    display: none;
  }
}

@media(min-width: 992px) {
  .slogen {
    display: block;
  }

  .rwdmain {
    display: block;
  }

  .rwdmd {
    display: none;
  }

}
</style>

<template>
  <q-layout view="hHh lpR fff">

    <q-header reveal class="bg-brown-9 text-amber-5" height-hint="98">
      <q-toolbar>
        <!-- 左側抽屜按鈕 - 放分類 -->
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-btn-group flat>
          <q-btn to="/" class="text-amber-5 text-h6 "><b>晶 ✧ 糸</b></q-btn>
          <p class="text-overline slogen">晶糸原創 ｜ 手作生活</p>
        </q-btn-group>

        <div class="col text-center text-weight-bold">
          <b> </b>
        </div>

        <!-- logo圖 -->
        <!-- <q-toolbar-title class="col">
          <q-avatar>
            <img src="../img/JM_logo.svg">
          </q-avatar>
        </q-toolbar-title> -->

        <q-btn-group outline>
          <q-btn v-if="isLogin && isAdmin" to="/admin" outline color="amber-5" icon="admin_panel_settings"
            label="後台管理" />
          <!-- <q-btn v-if="isLogin && !isAdmin" to="/aboutpage" outline color="amber-5" icon="auto_awesome" label="關於晶糸" /> -->
          <!-- <q-btn v-if="isLogin && !isAdmin" to="/contactus" outline color="amber-5" icon="mail_outline" label="聯絡我們" /> -->
          <q-btn v-if="!isLogin" to="/signup" outline color="amber-5" icon="login" label="註冊" />
          <q-btn v-if="!isLogin" to="/login" outline color="amber-5" icon="person" label="登入" />
          <q-btn class="rwdmain" v-if="isLogin && !isAdmin" to="/personpage" outline color="amber-5"
            icon="person_outline" label="會員資料" />
          <!-- <q-btn v-if="isLogin && !isAdmin" to="/lovelist" outline color="amber-5" icon="favorite" label="收藏清單" /> -->
          <q-btn class="rwdmain" v-if="isLogin && !isAdmin" to="/orderpage" outline color="amber-5" icon="fact_check"
            label="訂單紀錄" />
          <q-btn class="rwdmain" v-if="isLogin && !isAdmin" to="/cartpage" outline color="amber-5" icon="shopping_cart"
            label="購物車">
            <q-badge v-if="cart > 0" rounded floating transparent color="red" />
          </q-btn>
          <!-- <q-btn v-if="isLogin" to="" outline color="amber-5" icon="grade" label="評價紀錄" /> -->
          <q-btn class="rwdmain" v-if="isLogin" outline color="amber-5" icon="logout" @click="logout" label="登出" />
        </q-btn-group>

      </q-toolbar>

    </q-header>

    <!-- 左側抽屜 - 準備放商品分類 -->
    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered elevated>

      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered>
          <q-item clickable v-ripple to="/allproducts">
            <q-item-section avatar>
              <q-icon color="brown-9" name="piano" />
            </q-item-section>

            <q-item-section>全部商品</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/productstone">
            <q-item-section avatar>
              <q-icon color="brown-9" name="brightness_low" />
            </q-item-section>

            <q-item-section>天然石手鍊</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="productwax">
            <q-item-section avatar>
              <q-icon color="brown-9" name="spa" />
            </q-item-section>

            <q-item-section>蠟線編繩</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="productcloth">
            <q-item-section avatar>
              <q-icon color="brown-9" name="filter_vintage" />
            </q-item-section>

            <q-item-section>布品手作</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="productweave">
            <q-item-section avatar>
              <q-icon color="brown-9" name="cruelty_free" />
            </q-item-section>

            <q-item-section>棉麻編織</q-item-section>
          </q-item>

        </q-list>

        <q-list bordered>
          <q-item class="rwdmd" clickable v-ripple v-if="isLogin && !isAdmin" to="/personpage" outline color="amber-5">
            <q-item-section avatar>
              <q-icon color="brown-9" name="person_outline" />
            </q-item-section>

            <q-item-section>會員資料</q-item-section>
          </q-item>

          <q-item class="rwdmd" clickable v-ripple v-if="isLogin && !isAdmin" to="/orderpage" outline color="amber-5">
            <q-item-section avatar>
              <q-icon color="brown-9" name="fact_check" />
            </q-item-section>

            <q-item-section>訂單紀錄</q-item-section>
          </q-item>

          <q-item class="rwdmd" clickable v-ripple v-if="isLogin && !isAdmin" to="/cartpage" outline color="amber-5">
            <q-item-section avatar>
              <q-icon color="brown-9" name="shopping_cart" />
            </q-item-section>

            <q-item-section>購物車</q-item-section>
          </q-item>

          <q-item class="rwdmd" clickable v-ripple v-if="isLogin" outline color="amber-5" @click="logout">
            <q-item-section avatar>
              <q-icon color="brown-9" name="logout" />
            </q-item-section>

            <q-item-section>登出</q-item-section>
          </q-item>

        </q-list>

        <q-list bordered>
          <q-item clickable v-ripple to="/aboutpage">
            <q-item-section avatar>
              <q-icon color="brown-9" name="bakery_dining" />
            </q-item-section>

            <q-item-section>關於晶糸</q-item-section>
          </q-item>

          <!-- <q-item clickable v-ripple to="/contactus">
            <q-item-section avatar>
              <q-icon color="brown-9" name="email" />
            </q-item-section>

            <q-item-section>聯絡我們</q-item-section>
          </q-item> -->

        </q-list>

      </div>
    </q-drawer>

    <q-footer bordered class="bg-brown-9 text-amber-5 text-center">
      <!-- <q-toolbar> -->
      <!-- <q-toolbar-title></q-toolbar-title> -->
      <div class="q-pa-sm">
        <div class="q-px-xs q-pb-xs q-pt-md">
          <span>最新消息</span>&ensp;｜&ensp;<span>常見問題</span>&ensp;｜&ensp;<span>門市資訊</span>&ensp;｜&ensp;<span>會員權益</span>&ensp;｜&ensp;<span>退換貨服務</span>
        </div>
        <div class="q-pa-xs">MON-FRI,&ensp;10:00-20:00&emsp;TEL:(00)0000-0000&ensp;/&ensp;FAX:(00)0000-0000</div>
        <div class="q-pa-xs">service@jingming.com.tw</div>
        <div class="q-pa-sm">2022&ensp;JingMi.&ensp;All&ensp;Rights&ensp;Reserved.</div>
      </div>
      <!-- </q-toolbar> -->
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<!-- <script>
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
