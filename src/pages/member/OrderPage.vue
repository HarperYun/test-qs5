<!-- 會員訂單紀錄 -->
<template>
  <div class="window-width text-center">
    <h5><b>訂單紀錄</b></h5>
  </div>

  <div class="text-overline" style="width: 80vw; margin: auto;">
    <q-item class="justify-start bg-amber-4" style="border-radius: 15px 15px 0px 0px;">
      <q-item-section >訂單ID</q-item-section>
      <q-item-section >下單日期</q-item-section>
      <q-item-section >合計</q-item-section>
      <q-item-section >訂單內容</q-item-section>
    </q-item>

    <q-list separator bordered class="q-pa-xs q-ma-none" style="max-width: 100vw;" v-if='orders.length > 0'>

    <q-item clickable v-ripple class="q-ma-none" v-for='order in orders' :key='order._id'>
      <q-item-section >{{ order._id }}</q-item-section>
      <q-item-section >{{ new Date(order.date).toLocaleDateString() }}</q-item-section>
      <q-item-section >$ {{ order.totalPrice }}</q-item-section>
      <q-item-section >
        <div v-for='product in order.products' :key='product._id' >
          ➤ {{ product.product.name }} x {{ product.quantity }} （{{ product.remark }}）
        </div>
      </q-item-section>
    </q-item>
  <!-- <pre>{{ orders }}</pre> -->
    </q-list>

    <q-list v-else class="text-center">
      <p>沒有訂單</p>
    </q-list>

  </div>

</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const init = async () => {
  try {
    const { data } = await apiAuth.get('/orders')
    // console.log(...data.result)
    orders.push(...data.result.map(order => {
      order.totalPrice = order.products.reduce((a, b) => {
        return a + b.product.price * b.quantity
      }, 0)
      return order
    }))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '無法取得訂單'
    })
  }
}
init()

</script>
