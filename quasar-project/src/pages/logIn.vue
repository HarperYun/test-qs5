<template>
  登入* | 註冊
    <q-field
      label="帳號"
      >
      <q-input v-model="model" />
    </q-field>

    <q-field
      label="密碼"
      >
      <q-input v-model="model" />
    </q-field>

    <div class="q-pa-md q-gutter-sm">
      <q-btn color="brown-5" label="確認" />
      <q-btn color="white" text-color="black" label="取消" />
    </div>
</template>

<script setup>
</script>
