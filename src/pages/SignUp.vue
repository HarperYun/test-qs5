<style>
.cardcenter {
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.switch {
  font-size: 14px;
  margin: none;
}
</style>

<template>

  <div class="q-pa-md row q-gutter-md window-hight window-width justify-center ">
    <q-card class="my-card text-brown-9 cardcenter"
      style="width: 400px; background-color: rgb(255, 251, 237); border:2px solid #F2C037; border-radius: 15px;">

      <q-card-section class="text-center">
        <h6><b>註冊帳號</b></h6>
        <h6 class="switch">已有帳號？點此<span to="/login"><b>登入</b></span></h6>
      </q-card-section>

      <q-form @submit="register" @reset="reset" class="q-gutter-md">
        <q-card-section>
          <q-input filled v-model="form.email" label="信箱 *" lazy-rules :rules="rules.email" />
          <q-input filled v-model="form.account" label="帳號 *" lazy-rules :rules="rules.account" />
          <q-input filled v-model="form.password" label="密碼 *" lazy-rules :rules="rules.password" />
        </q-card-section>

        <q-card-section>
          <div class="q-pa-md q-gutter-sm">
            <q-btn type="submit" color="brown-9" label="註冊" :loading="loading" />
            <q-btn type="reset" color="white" text-color="black" label="清除" />
          </div>
        </q-card-section>

      </q-form>
    </q-card>
  </div>

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
