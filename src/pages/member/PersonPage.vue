<!-- 會員資料 -->
<style>
.membercard {
  width: 60vw;
  margin: auto;
  border-radius: 15px 15px 15px 15px;
  border: 2px solid rgb(255, 202, 40);
}

.avatar {
  width: 20vw;
  font-size: 100px;
}

.personalinformation {
  width: 35vw;
  margin: auto;
}
</style>

<template>
  <div class="window-width text-center">
    <h5><b>會員資料</b></h5>
  </div>

  <q-card class="membercard q-pa-md text-h6 text-center">
    <!-- <pre>{{ user }}</pre> -->
    <q-avatar class="avatar q-mt-lg">
      <img :src="avatar">
    </q-avatar>
    <q-card-section class="personalinformation text-left q-mt-lg">會員帳號：{{ user.account }}</q-card-section>
    <q-card-section class="personalinformation text-left">會員信箱：{{ user.email }}</q-card-section>
    <q-card-section class="personalinformation text-left">
      <p>手機號碼：</p>
      <q-input v-model="phonenumber" label="請輸入手機號碼" />
      <p>{{ user.phonenumber }}</p>
    </q-card-section>
    <!-- <q-card-section class="personalinformation text-left q-mb-xl">
      <p>收件地址：</p>{{ user.address }}
    </q-card-section> -->
    <q-btn class="bg-green-10 text-white self-end" label="更新" />

  </q-card>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

// const user = reactive()
const user = useUserStore()
const { avatar } = storeToRefs(user)
const phonenumber = ref('')

// 取得會員資料
// const init = async () => {
//   try {
//     const { user } = await apiAuth.get('/users')
//     // console.log(data)
//     // user.splice(0, user.length)
//     // user.push(data.result)
//   } catch (error) {
//     console.log(error)
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: '無法取得會員資料'
//     })
//   }
// }
// init()

</script>
