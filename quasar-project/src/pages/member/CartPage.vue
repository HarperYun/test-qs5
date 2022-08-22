<!-- 購物車頁面 -->
<template>
  <div class="window-width text-center">
    <h4>購物車</h4>
  </div>
  <q-table
    :grid="$q.screen.lt.md"
    title="購物車商品"
    row-key="name"
    v-if='cart.length > 0'
    :filter="filter"
    :rows="cart"
    :columns="orderColumns"
  >
  <!-- <template v-slot:body-cell="props">
    <q-td :props="props">
    <pre>{{ props }}</pre>
      {{ props.value }}
    </q-td>
  </template> -->
  </q-table>
  <q-list v-else class="text-center">
    <p>沒有訂單</p>
  </q-list>
  <!-- <div v-if='cart.length > 0' >
    <div class="q-pa-md" v-for='item in cart' :key='item._id' :class="{'bg-red': !item.product.sell}">
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

const updateCart = async (idx, quantity) => {
  const result = await user.updateCart({ product: cart[idx].product._id, quantity })
  if (result) {
    if (quantity === 0) {
      cart.splice(idx, 1)
    } else {
      cart[idx].quantity = quantity
    }
  }
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
    console.log(cart)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤1'
    })
  }
}
init()

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
    field: row => row.price
  },
  {
    name: 'subtotal',
    required: true,
    label: '小計',
    field: row => '123'
  },
  {
    name: 'todo',
    required: true,
    label: '操作',
    field: row => '123',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  }
])

// const products = [
//   {
//     name: 'A',
//     size: 2,
//     price: 3,
//     quantity: 4,
//     subtotal: 5,
//     todo: '6%'
//   }
// ]
</script>
