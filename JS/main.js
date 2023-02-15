//전역배지가 스크롤 될때 사라지게 하기
const badgeEl = document.querySelector('header .badges');
//클릭했을때 맨위로 
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지숨기기
    //gsap.to(요소, 지속시간, 옵션); -애니메이션 처리방법
    gsap.to(badgeEl, .6, {
      opacity: 0, //투명도
      display: 'none' //완젼히 없애기
    });
    //버튼보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    //버튼숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300)); //0.3초마다 기록
//클릭했을때 맨위로 
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

//VISUAL fade-in 순차적으로 보이게 하기 
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.8 초 뒤에 자동 실행됨
    opacity: 1
  });
});


// 슬라이더 동작하기 new Swiper(선택자,옵션)
new Swiper('.notice-Line .swiper-container', {
  direction: 'vertical', //수직 슬라이드
  autoplay: true, //자동 재생 여부
  loop: true //반복재생여부
});


new Swiper('.promotion .swiper-container', {
  //direction: 'horizontal', //수평슬라이드 기본값이므로 따로 명시할 필요가 없음
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

//awards swiper
new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


//프로모션 화살표를 누르면 프로모션 접히기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //프로모션이 숨겨져잇는지 확인 = 안숨겨짐
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // !는 반대가 되게 만들어줌
  if (isHidePromotion) { //프로모션이 보인다면
    //숨김처리 (hide)
    promotionEl.classList.add('hide');
  } else { //프로모션이 안보인다면
    //보임처리 (hide삭제)
    promotionEl.classList.remove('hide');

  }
})


//유튜브 위 동그라미(반복애니메이션)

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  //gsap.to(요소,시간,옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1, //무한반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

//스크롤매직 (스크롤위치계산애니메이션)
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


