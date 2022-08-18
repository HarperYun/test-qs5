<!-- 商品管理 -->
<template>
  <div class="window-width text-center">
    <h4>商品管理</h4>
  </div>

  <div class="q-ma-md">
    <q-btn color="blue-grey-10" icon="add_circle_outline" @click="dialog = true" label="新增商品" />
  </div>

  <div>
    <q-separator />

    <q-dialog v-model="dialog" persistent >
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">{{ form._id.length > 0 ? '編輯商品' : '新增商品' }}</div>
        </q-card-section>

        <!-- <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section> -->

        <q-card-section>
          <div class="row justify-center">
            <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
              <q-input filled v-model="form.name" label="名稱" />
            </div>
            <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
              <q-input filled type="number" v-model="form.price" label="價格" />
            </div>
            <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
              <q-select filled :options="categories" v-model='form.category' label="分類" />
            </div>
            <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
              <q-checkbox v-model='form.sell' label="是否上架"  />
            </div>
            <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
              <div class="row items-start">
                <q-file v-model="form.image"  label="上傳圖片" accept="image/*" filled counter multiple max-files="6" style="max-width: 300px" />
              </div>
            </div>
            <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
              <q-input filled type="textarea" v-model="form.description" label="商品描述" />
            </div>
          </div>

        </q-card-section>

        <q-card-actions align="center" class="q-mb-md">
          <q-btn class="bg-blue-grey-10 text-white" @click='submit' label="確定" v-close-popup />
          <q-btn class="bg-white text-blue-grey-10" @click='dialog = false' label="取消" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>

  <q-list bordered v-if='items.length > 0' >

    <q-item clickable v-ripple class="q-ma-md" v-for='item in items' :key='item._id'>
      <q-item-section avatar >
        <img :src='item.image'>
      </q-item-section>
      <q-item-section >{{ product.name }}</q-item-section>
    </q-item>

  </q-list>

  <q-list v-else class="text-center">
    <p>沒有商品</p>
  </q-list>

</template>

<script setup>
import { reactive, ref } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from 'boot/axios'

const items = reactive([])
const dialog = ref(false)
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: null,
  description: ''
})

const rules = reactive({

})

const text = ref('')

const categories = reactive(['天然石手鍊', '蠟線編繩', '布品手作', '棉麻編織'])

// const init = async () => {
//   try {
//     const { data } = await apiAuth.get('/items/all')
//     items.push(...data.result)
//   } catch (error) {
//     console.log(error)
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: error.isAxiosError ? error.response.data.message : error.message
//     })
//   }
// }
// init()
</script>
