//서브메뉴의 검색 돋보기 모양을 클릭햇을때도 포커스 되게 하기 
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

//포커스 되었을때 통합검색이라는 placeholder가 뜨게 하기
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//포커스가 해제 되었을때 통합검색이라는 placeholder 해제 하기
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//footer 연도 자동변경

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();