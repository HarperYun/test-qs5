<!-- 個別商品頁面 -->
<template>

  <q-form  class="row no-wrap justify-evenly text-center q-pa-xl q-ma-xl " v-model="valid" @submit.prevent="submit" >

    <q-card class="col-7">
      <q-img :src='product.image'/>
    </q-card>

    <q-card class="col-5">
      <div class="text-h5 text-left q-pa-lg">{{ product.name }}</div>
      <div class="text-h6 text-left q-pl-lg q-pb-md">${{ product.price }}</div>
      <div class="text-left q-pl-lg q-pb-sm" style="white-space: pre;">{{ product.description }}</div>
      <!-- <q-input class="q-ma-md" filled type="number" v-model="format" :rules='formatRule' label="手腕圍 （請取整數）" /> -->
      <q-input class="q-ma-md" filled type="number" v-model.number="quantity" :rules='quantityRule' label="數量" />
      <q-input
        class="q-ma-md"
        v-model="remark"
        filled
        clearable
        type="textarea"
        color="red-12"
        label="備註"
        hint="客製化長度及其他需求請在此填寫，非必填"
        :shadow-text="textareaShadowText"
        @keydown="processTextareaFill"
        @focus="processTextareaFill"
      />
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
import { text } from 'body-parser'

const props = defineProps(['product'])
const route = useRoute()
const router = useRouter()
const user = useUserStore()
const { addCart } = user

// const format = ref(10)
// const formatRule = reactive([
//   v => v >= 1 || '尺寸錯誤'
// ])

const quantity = ref(0)
const quantityRule = reactive([
  v => v >= 1 || '數量錯誤'
])

const remark = ref('')

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
  if (valid.value) return
  user.addCart({ product: product._id, quantity: quantity.value, remark: remark.value })
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
