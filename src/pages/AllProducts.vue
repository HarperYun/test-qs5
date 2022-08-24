<!-- 全部商品 -->
<template>
<h5 class="text-center"><b>全部商品</b></h5>
  <div>
    <div class="q-py-lg row items-start q-gutter-md justify-center" v-if='products.length > 0'>
      <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3" v-for="product in products" :key='product._id'>
        <ProductsCard :product="product" class="text-white bg-amber-2" />
      </q-card>

  </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from 'src/boot/axios'
import ProductsCard from 'src/components/ProductsCard.vue'

const products = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
