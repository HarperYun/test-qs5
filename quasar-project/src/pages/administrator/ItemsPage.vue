<!-- 商品管理 -->
<template>
  <div class="window-width text-center">
    <h4>商品管理</h4>
  </div>

  <div class="q-ma-md">
    <q-btn color="blue-grey-10 text-teal-2" icon="add_circle_outline" @click="openDialog('', -1)" label="新增商品" />
  </div>

  <div>

    <q-dialog v-model="form.dialog" persistent>
      <div style="max-width: 80vw; box-shadow: none ;">
        <q-form v-model="form.valid" @submit.prevent="submitForm">
          <q-card style="width: 700px; max-width: 80vw;">
            <!-- <q-card-section>
              <div class="text-h6">{{ form._id.length > 0 ? '編輯商品' : '新增商品' }}</div>
            </q-card-section> -->

            <q-card-section>
              <div class="row justify-center">
                <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
                  <q-input
                  filled
                  v-model="form.name"
                  :rules="[rules.required]"
                  label="名稱"
                  />
                </div>
                <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
                  <q-input
                  filled
                  type="number"
                  :rules="[rules.required, rules.price]"
                  v-model="form.price"
                  label="價格"
                  />
                </div>
                <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
                  <q-select
                  filled
                  :options="categories"
                  :rules="[rules.required]"
                  v-model='form.category'
                  label="分類"
                  />
                </div>
                <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
                  <q-checkbox
                  v-model='form.sell'
                  label="是否上架"  />
                </div>
                <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
                  <div class="row items-start">
                    <q-file
                    v-model="form.image"
                    label="上傳圖片"
                    accept="image/*"
                    filled
                    counter
                    multiple
                    max-files="6"
                    style="max-width: 300px"
                    :rules="[rules.size]"
                    />
                  </div>
                </div>
                <div class="col-xs-12 q-ma-sm q-gutter-md" style="max-width: 300px">
                  <q-input
                  filled type="textarea"
                  v-model="form.description"
                  label="商品描述"
                  />
                </div>
              </div>

            </q-card-section>

            <q-card-actions align="center" class="q-mb-md">
              <q-btn class="bg-blue-grey-10 text-white" type="submit" :loading="form.submitting" label="確定" v-close-popup />
              <q-btn class="bg-white text-blue-grey-10" :disabled='form.submitting' @click='form.dialog = false' label="取消" v-close-popup />
            </q-card-actions>

          </q-card>

        </q-form>
      </div>
    </q-dialog>

  </div>

  <q-list class="q-pa-xs q-ma-none" style="max-width: 80vw;" bordered v-if='items.length > 0' >

    <q-item clickable v-ripple class="q-ma-none" v-for='(item, idx) in items' :key='item._id'>
      <q-item-section avatar >
        <img :src='item.image'>
      </q-item-section>
      <q-item-section >{{ item.name }}</q-item-section>
      <q-item-section class="q-pa-sm q-gutter-sm justify-end">
        <q-btn class="bg-green-10 text-white" style="" @click="openDialog(item._id, idx)" icon='border_color' label="編輯" />
      </q-item-section>
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

const categories = reactive(['天然石手鍊', '蠟線編繩', '布品手作', '棉麻編織'])
const text = ref('')
const items = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  category: '',
  sell: false,
  image: [],
  description: '',
  idx: -1, // 如果做編輯商品的話，可以去改陣列的資料，不用重新做請求API
  dialog: false,
  valid: false,
  submitting: false
})

// 用規則分類的規則
const rules = reactive({
  required (v) {
    return !!v || '必填'
  },
  price (v) {
    return v > -1 || '必須大於等於 0'
  },
  size (v) {
    return !v || !v.length || (v[0]?.type?.includes('image') && v[0]?.size < 1024 * 1024) || '檔案超過1 MB 或 檔案格式不符'
  }
})

const openDialog = (_id, idx) => {
  form._id = _id
  if (idx > -1) {
    form.name = items[idx].name
    form.price = items[idx].price
    form.category = items[idx].category
    form.sell = items[idx].sell
    form.description = items[idx].description
  } else {
    form.name = ''
    form.price = 0
    form.category = ''
    form.sell = false
    form.description = ''
  }
  form.image = []
  form.idx = idx
  form.dialog = true
  form.valid = false
  form.submitting = false
}

const submitForm = async () => {
  console.log(123)
  if (form.valid) return
  form.submitting = true
  console.log(456)

  const fd = new FormData()
  for (const key in form) {
    if (['_id', 'idx', 'dialog', 'valid', 'submitting'].includes(key)) continue
    else if (key === 'image') fd.append(key, form[key][0])
    else fd.append(key, form[key])
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      items.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      items[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'success',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
  form.submitting = false
}

const init = async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
    items.push(...data.result)
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }
}
init()
</script>
