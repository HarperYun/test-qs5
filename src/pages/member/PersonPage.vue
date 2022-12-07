<!-- 會員資料 -->
<style>
.membercard {
  width: 60vw;
  margin: auto;
  border-radius: 15px 15px 15px 15px;
  border: 2px solid rgb(255, 202, 40);
}

.avatar {
  width: 20vw;
  font-size: 100px;
}

.personalinformation {
  width: 30vw;
  margin: auto;
}

.textsize {
  font-size: 15px;
}

.textspan {
  font-size: 16px;
  font-weight: bold;
}

.updatebtn {
  width: 43%;
  height: 5vh;
  font-weight: bold;
  font-size: 20px;
}

.m-form {
  margin-bottom: 5%;
}
</style>

<template>
  <div class="window-width text-center">
    <h5><b>會員資料</b></h5>
  </div>

  <q-form @submit.prevent="submit" class="m-form">
    <q-card class="membercard q-pa-md textsize text-center">
      <!-- <pre>{{ user }}</pre> -->
      <q-avatar class="avatar q-mt-lg">
        <img :src="avatar">
      </q-avatar>
      <q-card-section class="personalinformation q-px-xl text-left q-mt-lg">
        <span class="textspan">會員帳號：</span>{{ user.account }}
      </q-card-section>
      <q-card-section class="personalinformation q-px-xl text-left">
        <span class="textspan">會員信箱：</span>{{ user.email }}
      </q-card-section>
      <q-card-section class="personalinformation q-px-xl text-left">
        <p>
          <span class="textspan">手機號碼：</span>{{ newdata.phonenumber }}
        </p>
        <q-input v-if="opedEditNum" v-model="newdata.phonenumber" label="請輸入手機號碼" />
        <q-btn v-if="opedEditNum" class="bg-amber-5 text-brown-9 self-end" @click="opedEditNum = !opedEditNum"
          label="確認" />
        <q-btn v-if="!opedEditNum" class="bg-brown-6 text-white self-end" @click="opedEditNum = !opedEditNum"
          label="編輯" />
      </q-card-section>
      <q-card-section class="personalinformation q-px-xl text-left">
        <p><span class="textspan">收件地址：</span>{{ newdata.address }}</p>
        <q-input v-if="opedEditAdd" v-model="newdata.address" label="請輸入收件地址" />
        <q-btn v-if="opedEditAdd" class="bg-amber-5 text-brown-9 self-end" @click="opedEditAdd = !opedEditAdd"
          label="確認" />
        <q-btn v-if="!opedEditAdd" class="bg-brown-6 text-white self-end" @click="opedEditAdd = !opedEditAdd"
          label="編輯" />
      </q-card-section>

      <q-btn class="bg-amber-5 text-brown-9 updatebtn q-ma-lg q-mt-xl" type="submit" label="更 新" />

    </q-card>
  </q-form>

</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from '@/boot/axios'
import Swal from 'sweetalert2'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
// import { format } from 'path'

// const user = reactive()
const user = useUserStore()
const { avatar } = storeToRefs(user)

const opedEditNum = ref(false)
const opedEditAdd = ref(false)

const newdata = reactive({
  phonenumber: '',
  address: ''
})

const submit = async () => {
  // create a form
  // const newdata = new FormData()
  // newdata.append('phonenumber', user.phonenumber)
  // newdata.append('address', user.address)
  try {
    const { data } = await apiAuth.patch('/users', newdata)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '編輯成功'
    })
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error.isAxiosError ? error.response.data.message : error.message
    })
  }

  // PATCH data to backend

  // send update to backend
}

const init = () => {
  newdata.phonenumber = user.phonenumber
  newdata.address = user.address
}
init()
// 取得會員資料
// const init = async () => {
//   try {
//     const { user } = await apiAuth.get('/users')
//     // console.log(data)
//     // user.splice(0, user.length)
//     // user.push(data.result)
//   } catch (error) {
//     console.log(error)
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: '無法取得會員資料'
//     })
//   }
// }
// init()

</script>
