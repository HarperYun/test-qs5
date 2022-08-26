<style>
.productscard {
  object-fit: cover;
  box-shadow: none;
}

.productname {
  font-size: 14px;
}

@media(min-width: 767px){
  .productname {
    font-size: 15px;
  }

}

@media(min-width: 992px){
  .productname {
    font-size: 16px;
  }

}
</style>

<template>
  <q-card product-card class="productscard ">
    <router-link :to="'/product/' + product._id" style="text-decoration:none;">
      <q-img :src='product.image'/>
      <q-card-section class="text-brown-10 text-weight-bold">
        <div class="text-h6 productname">{{ product.name }}</div>
        <div class="text-subtitle2 text-overline productprice">${{ product.price }}</div>
      </q-card-section>
      <!-- <q-card-section>
        <q-btn color="brown-9" icon="add_circle" @click="addCart({ product: product._id, quantity: 1 })" label="加入購物車" />
      </q-card-section> -->
    </router-link>
  </q-card>
</template>

<script setup>
import { useUserStore } from 'src/stores/user'

const user = useUserStore()
const { addCart } = user
const props = defineProps(['product'])

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
