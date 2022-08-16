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

    <div style="position: absolute; left: 50%; transform: translateX(-50%);">
      <q-btn-group>
        <q-btn to="/" class="bg-brown-9" outline color="amber-5" icon="flare" label="本季新品" />
        <q-btn to="/" class="bg-brown-9" outline color="amber-5" icon="local_fire_department" label="人氣排行" />
      </q-btn-group>
    </div>

    <section-items/>

  </q-page>
</template>

<script>

import SectionCarousel from '../pages/indexpage/SectionCarousel.vue'
export default {
  components: {
    SectionCarousel
  }
}

</script>

<script setup>
</script>
