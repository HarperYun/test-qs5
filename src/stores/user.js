import { defineStore } from 'pinia'
import { api, apiAuth } from 'boot/axios.js'
import Swal from 'sweetalert2'

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      token: '',
      account: '',
      email: '',
      role: 0,
      cart: 0
    }
  },
  getters: {
    isLogin() {
      return this.token.length !== 0
    },
    // 是否管理員
    isAdmin() {
      return this.role === 1
    },
    // 隨機大頭貼，用帳號作為變化
    avatar() {
      return 'https://source.boringavatars.com/beam/200/' + this.account + '?colors=dae5ab,e9a385,fa154b,87313f,604e48'
    }
  },
  // 寫登入功能
  actions: {
    async login(form) {
      try {
        const { data } = await api.post('/users/login', form)
        this.token = data.result.token
        this.account = data.result.account
        this.email = data.result.email
        this.role = data.result.role
        this.cart = data.result.cart
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        // this.router.push('/') => quasar 用法
        this.router.push('/')
      } catch (error) {
        console.log(error)
        Swal.fire({
          icons: 'error',
          title: '失敗',
          text: (error.isAxiosError && error.response.data) ? error.response.data.message : '發生錯誤1'
        })
      }
    },
    async logout() {
      try {
        // 請求帶jwt的話要用以下的寫法
        // 因為已經在 axios 裡面設定過簡潔寫法，因此可刪掉原本的一串，直接引入
        // await api.delete('/users/logout', {
        //   headers: {
        //     authorization: `Bearer ${this.token}`
        //   }
        // })

        await apiAuth.delete('/users/logout')
        this.router.push('/')
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '已登出'
        })
      } catch (err) {
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '強制登出'
        })
        this.router.push('/')
      }
      this.token = ''
      this.account = ''
      this.role = 0
      this.cart = 0
    },
    // 加入購物車
    async addCart(data) {
      if (this.token.length === 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '請先登入'
        })
        this.router.push('/login')
        return
      }
      if (data.amount <= 0) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '數量必須大於 0'
        })
        return
      }
      try {
        const { data: resData } = await apiAuth.post('/users/cart', data)
        this.cart = resData.result
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '已加入購物車'
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '加入購物車失敗'
        })
      }
    },
    async updateCart(data) {
      try {
        await apiAuth.patch('/users/cart', data)
        return true
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '更新購物車失敗'
        })
        return false
      }
    },
    // 結帳
    async checkout() {
      try {
        await apiAuth.post('/orders')
        // 結帳成功後購物車清空
        this.cart = 0
        Swal.fire({
          icon: 'success',
          title: '成功',
          text: '結帳成功'
        })
        this.router.push('/orderpage')
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: '失敗',
          text: '結帳失敗'
        })
      }
    },
    async getUser() {
      if (this.token.length === 0) return
      try {
        const { data } = await apiAuth.get('/users')
        this.account = data.result.account
        this.role = data.result.role
        this.cart = data.result.cart
      } catch (error) {
        this.logout()
      }
    }
  },
  persist: {
    key: 'vite-shop',
    paths: ['token']
  }
})
