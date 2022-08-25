<!-- 使用者的購物車頁面 -->
<template>
  <div class="window-width text-center">
    <h5><b>購物車</b></h5>
  </div>
  <!-- <q-table :grid="$q.screen.lt.md" title="購物車商品" row-key="name" v-if='cart.length > 0' :filter="filter" :rows="cart" :columns="orderColumns" class="q-ma-xl q-pa-xl justify-center" >
  <pre>{{ cart }}</pre> -->
    <!-- <q-tr v-for='item in cart' :key='item._id'></q-tr> -->

    <!-- <template v-slot:body-cell="props">
      <q-td :props="props">
        <pre>{{ props }}</pre>
      {{ props.value }}
    </q-td>
  </template> -->

    <!-- <template #body-cell-todo="props">
        <pre>{{ props }}</pre>
      <q-td >
        <q-btn class="bg-negative text-amber-1" @click="updateCart(idx, 0)">刪除</q-btn>
      </q-td>
    </template> -->

  <!-- </q-table> -->

  <q-table
      title=" "
      :rows="cart"
      :columns="orderColumns"
      row-key="name"
      v-if="cart.length > 0 "
      style="width: 80vw; margin: auto; border-radius: 15px 15px 0px 0px;"
    >
      <!-- <template v-slot:header-cell-calories="props">
        <q-th :props="props">
          <q-icon name="thumb_up" size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template> -->

      <template #body-cell-todo="props">
        <!-- <pre>{{props}}</pre> -->
        <q-td :props="props">
          <q-btn :idx="props.rowIndex" class="bg-red-10 text-red-1" label="刪除" @click="updateCart(props.rowIndex, 0)" />
        </q-td>
      </template>

  </q-table>
  <q-list v-else class="text-center">
    <p>沒有訂單</p>
  </q-list>
  <q-list class="text-h5 q-mr-xl q-pr-lg">
    <div class="text-deep-orange-10 q-ma-xl text-right"><b>總金額 ${{ totalPrice }}</b></div>
  </q-list>

  <q-separator />

  <q-list class="row reverse q-mr-xl q-pr-lg">
    <q-btn class="bg-brown-9 text-amber-5 q-ma-xl text-h6" style="width: 20vw; height: 5vh;" @click="user.checkout" :disabled='!canCheckout'><b>送出結帳</b></q-btn>
  </q-list>
  <!-- <div v-if='cart.length > 0' >
    <div class="q-pa-md" v-for='(item, idx) in cart' :key='item._id' :class="{'bg-red': !item.product.sell}">
      <q-card>
        <div>名稱：{{ item.product.name }}</div>
        <div>單價：{{ item.product.price }}</div>
        <div>尺寸：</div>
        <div>
          <q-btn color='black' @click='updateCart(idx, item.quantity-1)' variant="text">-</q-btn>
          {{ item.quantity }}
          <q-btn color='black' @click='updateCart(idx, item.quantity+1)' variant="text">+</q-btn>
        </div>
      </q-card>
    </div>
  </div>
  <q-list v-else class="text-center">
    <p>沒有訂單</p>
  </q-list> -->

</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from 'src/boot/axios'
import { useUserStore } from 'src/stores/user'

const filter = ref('')

const user = useUserStore()

const cart = reactive([])

const totalPrice = computed(() => {
  return cart.reduce((a, b) => {
    return a + b.product.price * b.quantity
  }, 0)
})
const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(item => {
    return !item.product.sell
  })
})

const updateCart = async (rowIndex, quantity) => {
  console.log(rowIndex, quantity)
  const result = await user.updateCart({ product: cart[rowIndex].product._id, quantity })
  if (result) {
    if (quantity === 0) {
      cart.splice(rowIndex, 1)
    } else {
      cart[rowIndex].quantity = quantity
    }
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
    // console.log(cart)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤1'
    })
  }
}
init()

// https://youtu.be/hTJx17BlXxg?t=19787
// 寫購物車
// ---------------------------------------table----------------------------------------------------
const orderColumns = reactive([
  {
    name: 'name',
    align: 'left',
    required: true,
    label: '商品名稱',
    field: row => row.product.name,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'price',
    required: true,
    label: '單價',
    field: row => row.product.price

  },
  {
    name: 'quantity',
    required: true,
    label: '數量',
    field: row => row.quantity
  },
  {
    name: 'subtotal',
    required: true,
    label: '小計',
    field: row => row.quantity * row.product.price
  },
  {
    name: 'remark',
    required: true,
    label: '備註',
    field: row => row.remark
  },
  {
    name: 'todo',
    required: true,
    label: '操作',
    sortable: true
    // sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  }
])

</script>
