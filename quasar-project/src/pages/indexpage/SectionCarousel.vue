<!-- <section-carousel/> -->
<template>
<div class="q-pa-md text-white" >
  <div class="q-gutter-md">
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
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6 text-center">新 會 員 註 冊</div>
          <div class="text-h6 text-center">享 120 元 購 物 金</div>
        </div>
      </q-carousel-slide>

      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h6 text-center">新 品 ✧ 上 市</div>
        </div>
      </q-carousel-slide>

      <!-- <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide> -->

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
