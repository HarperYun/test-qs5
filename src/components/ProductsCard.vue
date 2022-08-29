<style>
.productscard {
  object-fit: cover;
  box-shadow: none;
}

.productname {
  font-size: 14px;
}

@media(min-width: 767px) {
  .productname {
    font-size: 15px;
  }

}

@media(min-width: 992px) {
  .productname {
    font-size: 16px;
  }

}
</style>

<template>
    <!-- <router-link :to="'/product/' + product._id" style="text-decoration:none;"> -->
  <q-card product-card class=" column productscard cursor-pointer full-height" @click="goProduct(product._id)">
        <q-img :src='product.image' />

        <div class="text-h6 text-brown-10 q-px-sm q-pt-sm text-weight-bold productname">{{ product.name }}</div>
      <q-space/>
      <div class="text-brown-10 text-weight-bold">

        <div class="text-subtitle2 text-overline q-px-sm productprice">${{ product.price }}</div>
      </div>
  </q-card>
    <!-- </router-link> -->
</template>

<script setup>
import { useUserStore } from 'src/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = useUserStore()
const { addCart } = user
const props = defineProps(['product'])

const goProduct = (productId) => {
  router.push('/product/' + productId)
}

// defineProps(['product'])

// defineProps({
//   product: {
//     type: Object,
//     required: true,
//     default () {
//       return {
//         _id: '',
//         name: '',
//         price: 0,
//         category: '',
//         sell: false,
//         image: '',
//         description: ''
//       }
//     }
//   }
// })
</script>
