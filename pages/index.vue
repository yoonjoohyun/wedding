<template>
<div class="wrap" @wheel="handleWheel" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <audio ref="audioPlayer" loop>
        <source src="~/assets/music/bgm.mp3" type="audio/mp3">
    </audio>
    <div class="music_btn" @click="togglemusic" :class="{ 'rotate': isPlaying }">
        <i :class="isPlaying ? 'ri-volume-up-fill' : 'ri-volume-mute-fill'"></i>
    </div>
    <div class="sections" :style="{ transform: `translateY(-${currentSection * 100}%)` }">
        <div class="content section">
            <div class="topline"><p>♡ 주현이와 영경이의 결혼식에 초대합니다 ♡</p></div>
            <div class="title_box">
                <div class="title">HAPPY<br>Wedding Day</div>
            </div>
            <div class="subtitle"><p class="subtitle_txt">United by ten years of love,
                <br>we now promise a lifetime together.</p>
            </div>
            <div class="maincover">
                <img src="~/assets/images/maincover_0515.webp" alt="maincover">
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
                    <img src="~/assets/images/05.webp"/>
                </div>
                <div class="photo" @click="openPhotoBox(4)">
                    <img src="~/assets/images/06.webp"/>
                </div>
                <div class="photo" @click="openPhotoBox(5)">
                    <img src="~/assets/images/07.webp"/>
                </div>
            </div>
            <div class="photo_box">
                <div class="photo" @click="openPhotoBox(6)">
                    <img src="~/assets/images/08.webp"/>
                </div>
                <div class="photo" @click="openPhotoBox(7)">
                    <img src="~/assets/images/09.webp"/>
                </div>
                <div class="photo" @click="openPhotoBox(8)">
                    <img src="~/assets/images/11.webp"/>
                </div>
            </div>
            <div class="photo_box">
                <div class="photo" @click="openPhotoBox(9)">
                    <img src="~/assets/images/13.webp"/>
                </div>
                <div class="photo" @click="openPhotoBox(10)">
                    <img src="~/assets/images/14.webp"/>
                </div>
                <div class="photo" @click="openPhotoBox(11)">
                    <img src="~/assets/images/16.webp"/>
                </div>
            </div>
            <div class="empty"></div>
        </div>
        <div class="content03 section">
            <div class="map">
                <div class="map_title">
                    찾아오시는 길
                </div>
                <div class="kakaomap">
                    <div id="daumRoughmapContainer1739338499547" class="root_daum_roughmap root_daum_roughmap_landing"></div>
                </div> 
            </div>
            <div class="explain">
                <div class="vehicle"><i class="ri-subway-line icon"></i> 지하철 이용 시</div>
                <div class="boxing">
                    <p class="subtxt"><span class="strongtxt">5호선 강동역</span> 하차 3번출구 도보 1분</p>
                </div>
            </div>
            <div class="explain">
                <div class="vehicle" @click="toggledetail">
                    <i class="ri-bus-2-line icon"></i> 버스 이용 시 
                    <span class="subtxt">: 강동역 하차</span>
                    <span class="detail_btn">더보기</span>
                </div>
                <div class="detail boxing">
                    <p class="txtbox">
                        <span class="boldtxt">간선 버스 : </span>
                        <span class="blue">130</span>
                        <span class="blue">341</span>
                        <span class="blue">342</span>
                        <span class="blue">370</span>
                    </p>
                    <p class="txtbox">
                        <span class="boldtxt">일반 버스 : </span>
                        <span class="green">3214</span>
                        <span class="green">3316</span>
                    </p>
                    <p class="txtbox">
                        <span class="boldtxt">지선 버스 : </span>
                        <span class="green">1-4</span>
                        <span class="green">23</span>
                        <span class="green">30-3</span>
                        <span class="green">112-1</span>
                        <span class="green">112-5</span>
                    </p>
                    <p class="txtbox">
                        <span class="boldtxt">직행 버스 : </span>
                        <span class="red">1113</span>
                        <span class="red">1113-1</span>
                    </p>
                    <p class="txtbox">
                        <span class="boldtxt">공항 버스 : </span>
                        <span class="purple">6200</span>
                    </p>
                </div>
            </div>
            <div class="explain">
                <div class="vehicle"><i class="ri-parking-box-line icon"></i> 주차장 이용 시</div>
                <div class="boxing gap">
                    <p class="subtxt">건물 내 무료 주차장 (지하 1층 ~ 지하 3층)
                    <br><span class="strongtxt">(1시간 30분 무료)</span></p>
                    <p style="margin-top:5px;" class="subtxt">유료 옥외 주차장 및 지하철 환승 주차장 이용</p>
                </div>
            </div>
        </div>
        <div class="content04 section">
            <Guestbook 
                v-model:isModalOpen="isModalOpen"
            />
        </div>
        <div class="content05 section">
            <div class="footer_title">
                꼭 오셔서 자리를 빛내주세요 :D
            </div>
            <div class="footer_image">
                <img src="~/assets/images/maincover_0515.webp"/>
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
const audioPlayer = ref(null);
const isPlaying = ref(false);
const hasInteracted = ref(false);  // 사용자 상호작용 여부를 추적하는 새로운 ref
const currentSection = ref(0);
const touchStartY = ref(0);
const isModalOpen = ref(false);
const totalSections = 5;
let isAnimating = false;


const togglemusic = () => {
    isPlaying.value = !isPlaying.value;
    
    if (isPlaying.value) {
        audioPlayer.value.play();
    } else {
        audioPlayer.value.pause();
    }
}

onMounted(() => {
    // 기본 음량을 0.4(40%)로 설정
    audioPlayer.value.volume = 0.4;
    
    // 사용자의 첫 상호작용을 감지하는 이벤트 리스너
    const startAudio = () => {
        if (!hasInteracted.value) {
            audioPlayer.value.currentTime = 4;  // 최초 재생 시에만 2초 지점으로 설정
            audioPlayer.value.play().then(() => {
                isPlaying.value = true;
                hasInteracted.value = true;
            }).catch(error => {
                console.log('Playback failed:', error);
                isPlaying.value = false;
            });
            // 이벤트 리스너 제거
            ['click', 'touchstart'].forEach(event => {
                document.removeEventListener(event, startAudio);
            });
        }
    };

    // 문서 전체에 이벤트 리스너 추가
    ['click', 'touchstart'].forEach(event => {
        document.addEventListener(event, startAudio);
    });

    new daum.roughmap.Lander({
        "timestamp" : "1739338499547",
        "key" : "2nzsw",
    }).render();
});

const toggledetail = () => {
    console.log('toggledetail clicked'); // 디버깅용 로그
    const detailElement = document.querySelector('.detail');
    if (detailElement) {
        console.log('detail element found'); // 요소를 찾았는지 확인
        detailElement.classList.toggle('detailopen');
    } else {
        console.log('detail element not found'); // 요소를 찾지 못했을 경우
    }
};

useHead({
    meta: [
        {
        charset: 'utf-8'
        },
        {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
        }
    ],
    script: [
        {
        src: 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js',
        charset: 'UTF-8'
        }
    ]
});

import { useHead } from 'unhead';

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
    // 모달이 열려있으면 슬라이드 효과 중지
    if (isModalOpen.value) return;
    
    if (e.deltaY > 0) {
        changeSection('down');
    } else {
        changeSection('up');
    }
};

const handleTouchStart = (e) => {
    // 모달이 열려있으면 터치 이벤트 무시
    if (isModalOpen.value) return;
    
    touchStartY.value = e.touches[0].clientY;
};

const handleTouchEnd = (e) => {
    // 모달이 열려있으면 터치 이벤트 무시
    if (isModalOpen.value) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.value - touchEndY;
    
    if (Math.abs(diff) > 50) {
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
import img4 from '~/assets/images/05.webp';
import img5 from '~/assets/images/06.webp';
import img6 from '~/assets/images/07.webp';
import img7 from '~/assets/images/08.webp';
import img8 from '~/assets/images/09.webp';
import img9 from '~/assets/images/11.webp';
import img10 from '~/assets/images/13.webp';
import img11 from '~/assets/images/14.webp';
import img12 from '~/assets/images/16.webp';

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
        content: 'https://wedding0823.netlify.app/_nuxt/maincover.CaYGDvqn.webp'
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