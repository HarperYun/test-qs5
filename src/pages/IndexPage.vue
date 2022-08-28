<!-- IndexPage = 首頁 -->
<style>
@media(min-width: 767px) {
  .productname {
    font-size: 15px;
  }
}

@media(min-width: 992px) {
  .productname {
    font-size: 16px;
  }
}
</style>

<template>
  <!-- QPageContainer底下的第一個頁面 一定要用QPage -->
  <q-page>
    <!-- <q-page class="flex flex-center"> -->
    <!-- <img
      alt="JM logo"
      src="../img/JM_logo.svg"
      style="width: 300px; height: 300px"
    > -->

    <!-- 輪播圖 - 外接 -->
    <section-carousel />

    <div class="q-pa-md" style="width: 85%; margin: auto;">
      <q-card>
        <q-tabs v-model="tab" dense class="text-brown-4 bg-amber-4" active-color="amber-5" active-bg-color="brown-9"
          indicator-color="white" align="justify">
          <q-tab class="text-h5 text-overline" style="height: 80px;" name="new" icon="flare" label="本季新品" />
          <q-tab class="text-h5 text-overline" style="height: 80px;" name="hot" icon="local_fire_department"
            label="人氣排行" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>

          <!--  col-xs-12 col-sm-4 col-md-3 -->
          <q-tab-panel name="new">
            <div class="q-py-lg row items-start q-gutter-md q-ma-sm justify-center" v-if='products.length > 0'>
              <q-card class="my-card q-ma-md col-xs-12 col-sm-4 col-md-3" v-for="product in products"
                :key='product._id'>
                <ProductsCard :product="product" class="text-white bg-amber-2" />
              </q-card>

            </div>

            <div v-else>
              <p>沒有商品</p>
            </div>
          </q-tab-panel>

          <q-tab-panel name="hot">
            <div class="q-py-lg row items-start q-gutter-md q-ma-sm justify-center" v-if='products.length > 0'>
              <q-card class="my-card q-ma-md col-xs-12 col-sm-4 col-md-3" v-for="product in products"
                :key='product._id'>
                <ProductsCard :product="product" class="text-white bg-amber-2 " />
              </q-card>

            </div>

            <div v-else>
              <p>沒有商品</p>
            </div>

          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

  </q-page>
</template>

<!-- <script>

export default {
  components: {
    SectionCarousel
  },
}

</script> -->

<script setup>
import SectionCarousel from '../pages/indexpage/SectionCarousel.vue'
import { ref, reactive } from 'vue'
import Swal from 'sweetalert2'
import { api } from 'src/boot/axios'
import ProductsCard from 'src/components/ProductsCard.vue'

const tab = ref('new')
// const innerTab = ref('innerMails')
// const splitterModel = ref(20)

const products = reactive([])

const init = async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '伺服器錯誤'
    })
  }
}
init()
</script>
