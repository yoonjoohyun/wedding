<template>
<div class="wrap">
    <div class="content">
        <div class="topline"><p>♡ 주현이와 영경이의 결혼식에 초대합니다 ♡</p></div>
        <div class="title_box">
            <div class="title">YOU & ME 10 YEARS<br>WE TOGETHER 100 YEARS</div>
        </div>
        <div class="subtitle"><p class="subtitle_txt">너와 내가 서로 마주보고 행복했던 지난 10년처럼
            <br>이제는 우리 함께 나란히 서서 앞으로 100년 더 행복하자</p>
        </div>
        <div class="maincover">
            <img src="~/assets/images/maincover.webp" alt="maincover">
        </div>
        <div class="people">윤 종문 · 황 인경 의 차남 <span class="b">주현</span></div>
        <div class="people">오 연배 · 김 은숙 의 차녀 <span class="b">영경</span></div>
        <div class="date">2023년 8월 23일 토요일 오후 1시 20분</div>
        <div class="location">강동역 3번출구 KDW웨딩 (도보 1분)</div>
        <div class="bottom_space"></div>
    </div>
    <div class="content02">
        <PhotoBox 
            :is-open="isPhotoBoxOpen" 
            :images="allImages" 
            :initial-slide="currentImageIndex"
            @close="closePhotoBox" 
        />
        <div class="photo_box">
            <div class="photo" @click="openPhotoBox(0)">
                <img src="~/assets/images/01.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(1)">
                <img src="~/assets/images/02.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(2)">
                <img src="~/assets/images/03.webp"/>
            </div>
        </div>
        <div class="photo_box">
            <div class="photo" @click="openPhotoBox(3)">
                <img src="~/assets/images/04.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(4)">
                <img src="~/assets/images/05.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(5)">
                <img src="~/assets/images/06.webp"/>
            </div>
        </div>
        <div class="photo_box">
            <div class="photo" @click="openPhotoBox(6)">
                <img src="~/assets/images/07.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(7)">
                <img src="~/assets/images/08.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(8)">
                <img src="~/assets/images/09.webp"/>
            </div>
        </div>
        <div class="photo_box">
            <div class="photo" @click="openPhotoBox(9)">
                <img src="~/assets/images/10.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(10)">
                <img src="~/assets/images/11.webp"/>
            </div>
            <div class="photo" @click="openPhotoBox(11)">
                <img src="~/assets/images/12.webp"/>
            </div>
        </div>
        <div class="empty"></div>
    </div>
    <div class="content03">
        <div class="map_title">
            찾아오시는 길
        </div>
        <div class="map">

        </div>
        <div class="explain">
            <div class="vehicle">버스</div>
            <div class="detail">
                <p class="blue">파랑 340번, 364번, 240번</p>
                <p class="green">초록 1180번, 1124번</p>
                <p class="yellow">마을 02번, 05번</p>
            </div>
        </div>
    </div>
    <div class="content04">
        <Guestbook/>
    </div>
</div>
</template>

<script setup>
import PhotoBox from '~/components/PhotoBox.vue';
import { ref } from 'vue';
import img1 from '~/assets/images/01.webp';
import img2 from '~/assets/images/02.webp';
import img3 from '~/assets/images/03.webp';
import img4 from '~/assets/images/04.webp';
import img5 from '~/assets/images/05.webp';
import img6 from '~/assets/images/06.webp';
import img7 from '~/assets/images/07.webp';
import img8 from '~/assets/images/08.webp';
import img9 from '~/assets/images/09.webp';
import img10 from '~/assets/images/10.webp';
import img11 from '~/assets/images/11.webp';
import img12 from '~/assets/images/12.webp';

const isPhotoBoxOpen = ref(false);
const currentImageIndex = ref(0);

// 모든 이미지 경로를 배열로 저장
const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,];

const openPhotoBox = (index) => {
    currentImageIndex.value = index;
    isPhotoBoxOpen.value = true;
};

const closePhotoBox = () => {
    isPhotoBoxOpen.value = false;
};
</script>

<style lang="scss" scoped src="~/assets/scss/main.scss"></style>