<!-- 會員資料 -->
<template>
  <div class="window-width text-center">
    <h5><b>會員資料</b></h5>
  </div>

  <q-card style="width: 80vw; margin: auto; border-radius: 15px 15px 0px 0px;" v-for='user in users' :key='user._id'>
      <q-card-section>{{ user._id }}</q-card-section>
      <pre>{{user}}</pre>
      <q-card-section>{{ user.email }}</q-card-section>
      <q-card-section>{{ user.account }}</q-card-section>

  </q-card>

</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const users = reactive([])

// 取得會員資料
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    console.log(data)
    users.splice(0, users.length)
    users.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得會員資料'
    })
  }
}
init()

</script>
