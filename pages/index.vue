<template>
<div class="wrap" 
    @wheel="handleWheel"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd">
    <div class="section">
        <div class="topbar"></div>
        <div class="content">
            <div class="topline">소중한 시간 내어주셔서 감사합니다.</div>
            <div class="title_box">
                <div class="titlebar"></div>
                <div class="title">YOU & ME 10 YEARS<br>WE TOGETHER 100 YEARS</div>
                <div class="titlebar"></div>
            </div>
            <div class="subtitle">너와 내가 서로 마주보고 행복했던 지난 10년처럼
                <br>이제는 우리 함께 나란히 서서 앞으로 100년 더 행복하자
            </div>
            <div class="maincover">
                <img src="~/assets/images/maincover.webp" alt="maincover">
            </div>
            <div class="people">윤 종문 · 황 인경 의 차남 <span class="b">주현</span></div>
            <div class="people">오 연배 · 김 은숙 의 차녀 <span class="b">영경</span></div>
            <div class="date">2023년 8월 23일 토요일 오후 1시 20분</div>
            <div class="location">강동역 3번출구 KDW웨딩 (도보 1분)</div>
        </div>
        <div class="bottombar"></div>
    </div>
    <div class="section">
        <div class="sec02">
            <div class="photo_title">happy wedding picture</div>
            <div class="photo_box">
                <div class="photo">
                    <img src="@/assets/images/01.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/02.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/03.webp"/>
                </div>
            </div>
            <div class="photo_box">
                <div class="photo">
                    <img src="@/assets/images/04.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/05.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/06.webp"/>
                </div>
            </div>
            <div class="photo_box">
                <div class="photo">
                    <img src="@/assets/images/07.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/08.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/09.webp"/>
                </div>
            </div>
            <div class="photo_box">
                <div class="photo">
                    <img src="@/assets/images/10.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/11.webp"/>
                </div>
                <div class="photo">
                    <img src="@/assets/images/12.webp"/>
                </div>
            </div>
        </div>
    </div>
    <div class="section">
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
</div>
</template>

<script setup>
import { ref } from 'vue';

const currentSection = ref(0);
const isScrolling = ref(false);
const touchStartY = ref(0);
const touchEndY = ref(0);

const handleWheel = (e) => {
    if (isScrolling.value) return;
    handleScroll(e.deltaY);
};

const handleTouchStart = (e) => {
    touchStartY.value = e.touches[0].clientY;
};

const handleTouchMove = (e) => {
    e.preventDefault(); // 기본 스크롤 동작 방지
    touchEndY.value = e.touches[0].clientY;
};

const handleTouchEnd = () => {
    if (isScrolling.value) return;
    
    const deltaY = touchStartY.value - touchEndY.value;
    handleScroll(deltaY);
};

const handleScroll = (deltaY) => {
    isScrolling.value = true;
    
    if (deltaY > 50 && currentSection.value < document.querySelectorAll('.section').length - 1) {
        // 위로 스와이프
        currentSection.value++;
    } else if (deltaY < -50 && currentSection.value > 0) {
        // 아래로 스와이프
        currentSection.value--;
    }
    
    const sections = document.querySelectorAll('.section');
    sections[currentSection.value].scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
        isScrolling.value = false;
    }, 1000);
};
</script>

<style lang="scss" scoped src="~/assets/scss/main.scss"></style>