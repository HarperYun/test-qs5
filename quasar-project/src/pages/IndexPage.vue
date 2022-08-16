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

    <section-carousel/>

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
