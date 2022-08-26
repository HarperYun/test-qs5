<!-- 布品手作 -->
<template>
<h5 class="text-center"><b>布品手作</b></h5>
<div class="q-ma-lg" style="max-width: 80vw; margin: auto;">
  <div class="q-py-lg row items-start q-gutter-md justify-center" v-if='products.length > 0'>
    <q-card style="max-width: 16vw;" class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3" v-for="product in productStone" :key='product._id'>
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

const productStone = reactive([])
const products = reactive([])
const init = async () => {
  try {
    const { data } = await api.get('/products')
    productStone.push(...data.result.filter(function(product) {
      return product.category.split('').includes('布')
    }))
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
