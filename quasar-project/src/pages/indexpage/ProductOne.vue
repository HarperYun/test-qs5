<!-- 個別商品頁面 -->
<template>

  <q-form class="row no-wrap justify-evenly text-center q-pa-sm q-ma-lg " v-model="valid" @submit.prevent="submit" >

    <q-card class="col-6">
      <q-img :src='product.image'/>
    </q-card>

    <q-card class="col-6">
      <div class="text-h6">{{ product.name }}</div>
      <!-- <div class="text-h6">{{ product.name }}</div> -->
      <div class="text-subtitle2">${{ product.price }}</div>
      <div>{{ product.description }}</div>
      <q-input filled type="number" v-model="handlong" label="手腕圍 （請取整數）" />
      <q-input filled type="number" v-model="quantity" :rules='quantityRule' label="數量" />
      <q-btn class="q-ma-lg" color="brown-9" icon="add_circle" type="submit" label="加入購物車" />
    </q-card>
  </q-form>

</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { api } from 'src/boot/axios'
import Swal from 'sweetalert2'
import { useUserStore } from 'src/stores/user'

const route = useRoute()
const router = useRouter()
const user = useUserStore()

const handlong = ref(0)

const quantity = ref(0)
const quantityRule = reactive([
  v => v >= 1 || '數量錯誤'
])

const valid = ref(false)

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: '',
  description: ''
})

const submit = () => {
  if (!valid.value) return
  user.addCart({ product: product._id, quantity: quantity.value })
}

const init = async () => {
  try {
    console.log(route.params.id)
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.category = data.result.category
    product.sell = data.result.sell
    product.image = data.result.image
    product.description = data.result.description
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品資料失敗'
    })
    router.go(-1) // 回上一頁
  }
}
init()
</script>
