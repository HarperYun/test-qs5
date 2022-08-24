<!-- 會員管理 -->
<template>
<div class="window-width text-center">
  <h5>會員管理</h5>
</div>

  <!-- <q-list separator bordered class="q-pa-xs q-ma-none" style="max-width: 100vw;" v-if='users.length > 0'>

    <q-item>
      <q-item-section >頭像</q-item-section>
      <q-item-section >會員ID</q-item-section>
      <q-item-section >會員信箱</q-item-section>
      <q-item-section >會員帳號</q-item-section>
      <q-item-section > </q-item-section>
      <q-item-section >操作</q-item-section>
    </q-item>

    <q-item clickable v-ripple class="q-ma-none" v-for='user in users' :key='user._id'>
      <q-item-section >{{ user._id }}</q-item-section>
      <q-item-section >{{ user.email }}</q-item-section>
      <q-item-section >{{ user.account }}</q-item-section>
    </q-item>

  </q-list>

  <q-list v-else class="text-center">
    <p>沒有會員</p>
  </q-list> -->

</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const users = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users')
    users.push(...data.result)
    console.log(users)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得會員列表'
    })
  }
}
init()

</script>
