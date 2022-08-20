<!-- IndexPage = 首頁 -->
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
    <section-carousel/>

    <!-- <div style="position: absolute; left: 50%; transform: translateX(-50%);">
      <q-btn-group>
        <q-btn to="/" class="bg-brown-9" outline color="amber-5" icon="flare" label="本季新品" />
        <q-btn to="/" class="bg-brown-9" outline color="amber-5" icon="local_fire_department" label="人氣排行" />
      </q-btn-group>
    </div> -->

    <div class="q-pa-md" style="max-width: 100%">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-brown-3 bg-amber-5"
        active-color="brown-9"
        indicator-color="brown-9"
        align="justify"
      >
        <q-tab name="new" icon="flare" checked label="本季新品" />
        <q-tab name="hot" icon="local_fire_department" label="人氣排行" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="new">
          <div class="q-pt-lg q-pb-lg row items-start q-gutter-md justify-center">

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

          </div>
        </q-tab-panel>

        <q-tab-panel name="hot">
          <div class="q-pt-lg q-pb-lg row items-start q-gutter-md justify-center">

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

            <q-card class="my-card q-ma-md col-xs-6 col-sm-4 col-md-3">
              <img src="https://cdn.quasar.dev/img/mountains.jpg">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>

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
import ProductCard from 'src/components/ProductsCard.vue'

const tab = ref('mails')
const innerTab = ref('innerMails')
const splitterModel = ref(20)

const products = reactive({})

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

</script>
