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
            <div id="map" style="width:100%;height:400px;"></div>
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
const config = useRuntimeConfig();

import PhotoBox from '~/components/PhotoBox.vue';
import { ref, onMounted } from 'vue';
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

// 카카오맵 관련 설정
onMounted(() => {
  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${config.public.KAKAO_MAP_API_KEY}`;
  script.async = true;
  
  script.onload = () => {
    window.kakao.maps.load(() => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(37.5359, 127.1339), // KDW웨딩 좌표
        level: 3
      };
      
      const map = new window.kakao.maps.Map(container, options);
      
      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(37.5359, 127.1339);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      
      // 마커를 지도에 표시
      marker.setMap(map);
      
      // 인포윈도우 생성
      const iwContent = '<div style="padding:5px;">KDW웨딩</div>';
      const infowindow = new window.kakao.maps.InfoWindow({
        content: iwContent
      });
      
      // 마커에 마우스오버 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'mouseover', () => {
        infowindow.open(map, marker);
      });
      
      // 마커에 마우스아웃 이벤트 등록
      window.kakao.maps.event.addListener(marker, 'mouseout', () => {
        infowindow.close();
      });
    });
  };

  document.head.appendChild(script);
});
</script>

<style lang="scss" scoped src="~/assets/scss/main.scss"></style>