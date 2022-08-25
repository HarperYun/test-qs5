<!-- 後台會員管理 -->
<template>
  <div class="window-width text-center">
    <h5>會員管理</h5>
  </div>

  <q-list separator bordered class="q-pa-xs q-ma-none" style="width: 80vw; margin: auto;" v-if='users.length > 0'>

    <q-item>
      <!-- <q-item-section>頭像</q-item-section> -->
      <q-item-section>會員ID</q-item-section>
      <q-item-section>會員信箱</q-item-section>
      <q-item-section>會員帳號</q-item-section>
      <q-item-section class="text-right">操作</q-item-section>
    </q-item>

    <q-item clickable v-ripple class="q-ma-none" v-for='user in users' :key='user._id'>
      <q-item-section>{{ user._id }}</q-item-section>
      <!-- <pre>{{user}}</pre> -->
      <q-item-section>{{ user.email }}</q-item-section>
      <q-item-section>{{ user.account }}</q-item-section>
      <q-item-section>
        <q-btn :key='user._id' class="bg-red-10 text-red-1 self-end" icon="delete" @click="deleteUser(user._id)" label="刪除"/>
      </q-item-section>

    </q-item>

  </q-list>

  <q-list v-else class="text-center">
    <p>沒有會員</p>
  </q-list>

</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const users = reactive([])

// 刪除
const deleteUser = async(userId) => {
  console.log(userId)
  try {
    await apiAuth.delete('/users/' + userId)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '刪除成功'
    })
    init()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '刪除失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}

// 取得會員列表
const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/all')
    users.splice(0, users.length)
    users.push(...data.result)
    // console.log(users)
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
