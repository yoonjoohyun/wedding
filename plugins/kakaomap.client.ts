// plugins/kakaomap.client.ts
export default defineNuxtPlugin(() => {
    return {
      provide: {
        initializeKakaoMap: () => {
          return new Promise((resolve) => {
            if (window.kakao && window.kakao.maps) {
              resolve(window.kakao.maps);
            } else {
              const script = document.createElement('script');
              script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=76ad6b7f2886a2069792b36501302db7`;
              script.onload = () => {
                window.kakao.maps.load(() => {
                  resolve(window.kakao.maps);
                });
              };
              document.head.appendChild(script);
            }
          });
        }
      }
    }
  });