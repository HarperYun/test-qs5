<template>
  <h6><b>註冊帳號</b></h6>
  <q-form @submit="register" @reset="reset" class="q-gutter-md">

    <q-input filled v-model="form.email" label="信箱 *" lazy-rules :rules="rules.email"/>
    <q-input filled v-model="form.account" label="帳號 *" lazy-rules :rules="rules.account"/>
    <q-input filled v-model="form.password" label="密碼 *" lazy-rules :rules="rules.password"/>

    <div class="q-pa-md q-gutter-sm">
      <q-btn type="submit" color="brown-5" label="註冊" :loading="loading"/>
      <q-btn type="reset" color="white" text-color="black" label="清除" />
    </div>
  </q-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { isEmail } from 'validator'
import { api } from 'boot/axios.js'
import { useRouter } from 'vue-router' // useRoute，有 r 是可做操作，沒有 r 的是路由資訊
import Swal from 'sweetalert2'

const router = useRouter()

const valid = ref(false)
const loading = ref(false)

const form = reactive({
  email: '',
  account: '',
  password: ''
})

const rules = reactive({
  email: [
    v => !!v || '信箱必填',
    v => isEmail(v) || '信箱格式錯誤'
  ],
  account: [
    v => !!v || '帳號必填',
    v => (v.length >= 4 && v.length <= 20) || '帳號長度為 4 到 20 字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 字',
    v => /^[a-zA-Z0-9]+$/.test(v) || '密碼只能由英數字組成'
  ]
})

const register = async () => {
  // if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      // 'error.response.data.message' 是去抓 axios 回傳資料的message
      text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤'
    })
  }
  loading.value = false
}

</script>
