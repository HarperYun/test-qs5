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
        class="text-brown-3 bg-brown-9"
        active-color="amber-5"
        indicator-color="amber-5"
        align="justify"
      >
        <q-tab name="new" icon="flare" checked label="本季新品" />
        <q-tab name="hot" icon="local_fire_department" label="人氣排行" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="new">
          <div class="text-h6">New</div>
          new new new new new new new new new new new new new
        </q-tab-panel>

        <q-tab-panel name="hot">
          <div class="text-h6">Hot</div>
          hot hot hot hot hot hot hot hot hot hot hot hot hot
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>

  </q-page>
</template>

<script>

import SectionCarousel from '../pages/indexpage/SectionCarousel.vue'
import { ref } from 'vue'

export default {
  components: {
    SectionCarousel
  },
  setup () {
    return {
      tab: ref('mails'),
      innerTab: ref('innerMails'),
      splitterModel: ref(20)
    }
  }
}

</script>

<script setup>
</script>
