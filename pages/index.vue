<template>
<div class="wrap" @wheel="handleWheel" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <div class="sections" :style="{ transform: `translateY(-${currentSection * 100}%)` }">
        <div class="content section">
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
            <div class="bottom_line"></div>
        </div>
        <div class="content02 section">
            <PhotoBox 
                :is-open="isPhotoBoxOpen" 
                :images="allImages" 
                :initial-slide="currentImageIndex"
                @close="closePhotoBox" 
            />
            <div class="bottom_space"></div>
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
        <div class="content03 section">
            <div class="map_title">
                찾아오시는 길
            </div>
            <div class="map">
                <div class="kakaomap">
                    <img src="http://t1.daumcdn.net/roughmap/imgmap/954a38ecc459fc1f97b5a423807bec77e66b8d466f406c51125f87d31e4080d8">
                </div>
                <div class="map_navi">
                    <div class="left">
                        <a class="kakao_logo" href="https://map.kakao.com" target="_blank"><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png"></a>
                    </div>
                    <div class="right">
                        <a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;srcid=10124741&amp;confirmid=10124741&amp;q=KDW%EC%9B%A8%EB%94%A9&amp;rv=on">로드뷰</a>
                        <a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=KDW%EC%9B%A8%EB%94%A9&amp;eX=529548.0&amp;eY=1120995.0">길찾기</a>
                        <a target="_blank" href="https://map.kakao.com/?urlX=529548.0&amp;urlY=1120995.0&amp;itemId=10124741&amp;q=KDW%EC%9B%A8%EB%94%A9&amp;srcid=10124741&amp;map_type=TYPE_MAP&amp;from=roughmap">
                            자세히
                        </a> 
                    </div>
                </div>
            </div>
            <div class="explain">
                <div class="vehicle">버스</div>
                <div class="detail">
                    <p class="blue">파랑 340번, 364번, 240번</p>
                    <p class="green">초록 1180번, 1124번</p>
                    <p class="yellow">마을 02번, 05번</p>
                </div>
            </div>
            <div class="explain">
                <div class="vehicle">지하철</div>
                <div class="detail">
                    <p class="blue">파랑 340번, 364번, 240번</p>
                    <p class="green">초록 1180번, 1124번</p>
                    <p class="yellow">마을 02번, 05번</p>
                </div>
            </div>
        </div>
        <div class="content04 section">
            <Guestbook/>
        </div>
        <div class="content05 section">
            <div class="footer_title">
                꼭 오셔서 자리를 빛내주세요 :D
            </div>
            <div class="footer_image">
                <img src="~/assets/images/maincover.webp"/>
            </div>
            <div class="footer_link" @click="copyLink('https://wedding0823.netlify.app/')">모바일 청첩장 공유하기<i class="ri-external-link-line"></i></div>
            <div class="footer_copyright">
                Copyright Crayon_000 All rights reserved.
            </div>
            <div class="footer_space"></div>
        </div>
    </div>
</div>
</template>

<script setup>
import { useHead } from 'unhead';

const currentSection = ref(0);
const touchStartY = ref(0);
const totalSections = 5;
let isAnimating = false;

const changeSection = (direction) => {
    if (isAnimating) return;
    
    isAnimating = true;
    if (direction === 'down' && currentSection.value < totalSections - 1) {
        currentSection.value++;
    } else if (direction === 'up' && currentSection.value > 0) {
        currentSection.value--;
    }
    
    setTimeout(() => {
        isAnimating = false;
    }, 1000); // 애니메이션 시간과 동일하게 설정
};

const handleWheel = (e) => {
    if (e.deltaY > 0) {
        changeSection('down');
    } else {
        changeSection('up');
    }
};

const handleTouchStart = (e) => {
    touchStartY.value = e.touches[0].clientY;
};

const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.value - touchEndY;
    
    if (Math.abs(diff) > 50) { // 50px 이상 스와이프했을 때만 동작
        if (diff > 0) {
            changeSection('down');
        } else {
            changeSection('up');
        }
    }
};

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

// head 메타 정보 설정
useHead({
  title: '♡ 주현이와 영경이의 결혼식에 초대합니다 ♡',
  meta: [
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: '♡ 주현이와 영경이의 결혼식에 초대합니다 ♡'
    },
    {
      property: 'og:description',
      content: '2023년 8월 23일 토요일 오후 1시 20분, 강동역 3번출구 KDW웨딩'
    },
    {
      property: 'og:image',
      // 실제 이미지 URL로 변경해주세요 (전체 URL 경로 필요)
      content: 'https://wedding0823.netlify.app/_nuxt/maincover.CZwigx1R.webp'
    },
    {
      property: 'og:url',
      content: 'https://wedding0823.netlify.app'
    }
  ]
})



const copyLink = async (address) => {
  try {
    await navigator.clipboard.writeText(address);
    alert('모바일 청첩장 링크가 복사되었습니다.');
  } catch (err) {
    console.error('링크 복사 실패:', err);
    alert('링크 복사에 실패했습니다.');
  }
};
</script>

<style lang="scss" scoped src="~/assets/scss/main.scss"></style>