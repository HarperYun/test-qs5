<!-- <section-carousel/> -->
<!-- 首頁輪播圖 -->
<template>
<div class="q-pa-md text-white" >
  <div class="q-gutter-md" >
    <!-- navigation => 控制紐(圓點) -->
    <q-carousel
      arrows
      animated
      infinite
      height="500px"
      v-model="slide"
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide name="first" img-src="src/img/bag_01/LINE_ALBUM_2022816_220816_1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6 text-center"><b>新 會 員 註 冊</b></div>
          <div class="text-h6 text-center"><b>享 120 元 購 物 金</b></div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="second" img-src="src/img/bag_01/LINE_ALBUM_2022816_220816_6.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6 text-center"><b>新 品 ✧ 上 市</b></div>
        </div>
      </q-carousel-slide>

    </q-carousel>
  </div>
</div>
</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}

</script>
