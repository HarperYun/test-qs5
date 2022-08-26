<!-- 後台訂單管理 -->
<style>
body {
  overflow-x: hidden;
}
</style>
<template>
  <div class="window-width text-center">
    <h5><b>訂單管理</b></h5>
  </div>

  <q-list separator bordered class="q-pa-xs q-ma-none" style="width: 80vw; margin: auto;" v-if='orders.length > 0'>

    <q-item>
      <q-item-section >訂單ID</q-item-section>
      <q-item-section >下單日期</q-item-section>
      <q-item-section >合計</q-item-section>
      <q-item-section >下單帳號</q-item-section>
      <q-item-section >訂單內容</q-item-section>
      <!-- <q-item-section class="text-right">操作</q-item-section> -->
    </q-item>

    <q-item clickable v-ripple class="q-ma-none" v-for='order in orders' :key='order._id'>
      <q-item-section >{{ order._id }}</q-item-section>
      <q-item-section >{{ new Date(order.date).toLocaleDateString() }}</q-item-section>
      <q-item-section >$ {{ order.totalPrice }}</q-item-section>
      <q-item-section >{{ order.user.account }}</q-item-section>
      <q-item-section >
        <div v-for='product in order.products' :key='product._id' >
          ➤ {{ product.product.name }} x {{ product.quantity }} （{{ product.remark }}）
        </div>
      </q-item-section>
      <!-- <q-item-section>
        <q-btn class="bg-red-10 text-red-1 self-end" icon="delete" label="刪除"/>
      </q-item-section> -->
    </q-item>

  </q-list>

  <q-list v-else class="text-center">
    <p>沒有訂單</p>
  </q-list>

</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

// 取得訂單
const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    // console.log(...data.result)
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()

</script>
