<template>

  <div class="q-pa-md row q-gutter-md window-hight window-width justify-center">
    <q-card class="my-card bg-amber-5 text-brown-9" style="width: 400px;">

      <q-card-section class="text-center">
        <h6><b>登入帳號</b></h6>
      </q-card-section>

      <q-form @submit="login" @reset="reset" class="q-gutter-md">
        <q-card-section>
          <q-input filled v-model="form.account" label="帳號 *" lazy-rules :rules="rules.account"/>
          <q-input filled v-model="form.password" label="密碼 *" lazy-rules :rules="rules.password"/>
        </q-card-section>

        <q-card-section>
          <div class="q-pa-md q-gutter-sm">
            <q-btn type="submit" color="brown-5" label="登入" :loading="loading"/>
            <q-btn type="reset" color="white" text-color="black" label="清除" />
          </div>
        </q-card-section>

      </q-form>
    </q-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from 'src/stores/user'

const user = useUserStore()

const valid = ref(false)
const loading = ref(false)

const form = reactive({
  account: '',
  password: ''
})

const rules = reactive({
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

const login = () => {
  user.login(form)
}

</script>
