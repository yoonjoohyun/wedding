<template>
  <div class="photo-modal" v-if="isOpen" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-btn" @click="closeModal">&times;</button>
      <swiper
        :modules="[SwiperNavigation]"
        :slides-per-view="1"
        :navigation="true"
        :initial-slide="initialSlide"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`photo ${index + 1}`">
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  initialSlide: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

const onSwiper = (swiper) => {
  // swiper instance 필요시 사용
};
</script>

<style scoped src="@/assets/scss/photobox.scss"></style>