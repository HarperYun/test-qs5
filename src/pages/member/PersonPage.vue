<!-- 會員資料 -->
<style>
.membercard {
  width: 50vw;
  margin: auto;
  border-radius: 15px 15px 15px 15px;
  border: 2px solid rgb(255, 202, 40);
}

.avatar {
  width: 20vw;
  font-size: 100px;
}
</style>

<template>
  <div class="window-width text-center">
    <h5><b>會員資料</b></h5>
  </div>

  <q-card class="membercard text-center q-pa-md text-h6">
    <!-- <pre>{{ user }}</pre> -->
    <q-avatar class="avatar q-mt-md">
      <img :src="avatar">
    </q-avatar>
    <q-card-section class="q-mt-lg">會員帳號：{{ user.account }}</q-card-section>
    <q-card-section class="q-mb-lg">信箱：{{ user.email }}</q-card-section>
    <!-- <q-card-section>手機：{{ user.phonenumber }}</q-card-section> -->

  </q-card>

</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

// const user = reactive()
const user = useUserStore()
const { avatar } = storeToRefs(user)

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
