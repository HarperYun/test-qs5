<template>
  登入 | 註冊*
    <q-field label="信箱" >
      <q-input v-model="form.email" :rules="rules.email" counter="20"/>
    </q-field>

    <q-field label="帳號" >
      <q-input v-model="form.account" :rules="rules.account" counter="20" />
    </q-field>

    <q-field label="密碼" >
      <q-input v-model="form.password" :rules="rules.password" counter="20" />
    </q-field>

    <!-- <q-field
      label="再次輸入密碼"
      >
      <q-input v-model="model.password" />
    </q-field> -->

    <div class="q-pa-md q-gutter-sm">
      <q-btn color="brown-5" label="確認" />
      <q-btn color="white" text-color="black" label="取消" />
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { isEmail } from 'validator'

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
    v => v.match(/^[a-zA-Z0-9]+$/) || '帳號只能由英數字組成'
  ],
  password: [
    v => !!v || '密碼必填',
    v => (v.length >= 4 && v.length <= 20) || '密碼長度為 4 到 20 字',
    v => v.match(/^[a-zA-Z0-9]+$/) || '密碼只能由英數字組成'
  ]
})

</script>
