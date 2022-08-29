<!-- <section-carousel/> -->
<!-- 首頁輪播圖 -->
<style>
.imgpA {
  position: absolute;
  top: 35%;
  /* text-shadow: 0 0 50px 51px rgba(255, 237, 237, 0.9); */
}

.imgpB {
  position: absolute;
  top: 50%;
}

.cabtn {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
}
</style>

<template>
  <div class="text-amber-2">
    <div class="q-gutter-md">
      <!-- navigation => 控制紐(圓點) -->
      <q-carousel arrows animated infinite height="500px" v-model="slide" :autoplay="autoplay"
        transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
        @mouseleave="autoplay = true">
        <q-carousel-slide name="first" img-src="~assets/bag_01/LINE_ALBUM_2022816_220816_1.jpg">
          <div class="absolute-bottom custom-caption imgpA">
            <div class="text-h6 text-center "><b>新 會 員 註 冊</b></div>
            <div class="text-h6 text-center"><b>享 100 元 購 物 金</b></div>
            <q-btn to="/signup" class="text-weight-bold text-h5 text-center bg-amber-2 text-brown-9 cabtn">馬上註冊</q-btn>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="second" img-src="~assets/bag_01/LINE_ALBUM_2022816_220816_6.jpg">
          <div class="absolute-bottom custom-caption imgpB">
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
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}

</script>
