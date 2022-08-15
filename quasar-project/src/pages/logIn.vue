<template>
  <h6><b>登入</b> | 註冊</h6>
  <q-form>

    <q-input filled v-model="form.account" label="帳號 *" lazy-rules :rules="rules.account" />
    <q-input filled v-model="form.password" label="密碼 *" lazy-rules :rules="rules.password" />

    <div class="q-pa-md q-gutter-sm">
      <q-btn type="submit" color="brown-5" label="登入" :loading="loading" @click="showLoading" />
      <q-btn type="reset" color="white" text-color="black" label="取消" />
    </div>
  </q-form>
</template>

<script setup>
</script>
