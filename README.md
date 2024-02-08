# 내일의 집 클론 코딩

---

HTML + SCSS + JS를 활용한 오늘의 집 컨셉의 웹사이트 클론 코딩

## 📆 제작기간

2023.12.28 ~ 2024.2.8 (약 1개월)

## ⚙️ 개발환경

- HTML 5
- SCSS
- Javascript

## 🧑🏻‍💻 프로젝트 목표

- SCSS 작성 문법 및 컴포넌트 단위별 파일 관리
- 실무와 유사한 초기 개발 환경 설정 (node, .prettierrc, github, favicon)
- 시멘틱한 마크업을 위한 적절한 HTML 요소 및 속성 사용법

## 📌 주요 코드

### 1. GNB

- 로그인을 한 경우

```html
<div class="gnb-button-group">
  <button
    class="gnb-icon-btn search-btn lg-hidden"
    type="button"
    aria-label="검색창 열기"
  >
    <i class="ic-search" aria-hidden></i>
  </button>
  <a
    class="gnb-icon-btn bookmark-btn sm-hidden"
    href="/"
    aria-label="북마크 페이지로 이동"
  >
    <i class="ic-bookmark" aria-hidden> </i>
  </a>
  <button
    class="gnb-icon-btn notice-btn sm-hidden"
    type="button"
    aria-label="알림창 열기"
  >
    <i class="ic-bell" aria-hidden></i>
    <div class="badge" aria-label="5개의 알림이 있습니다.">5</div>
  </button>
  <a class="gnb-icon-btn cart-btn" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart" aria-hidden></i>
  </a>
  <div class="my-menu sm-hidden">
    <button
      class="avatar-32 my-menu-btn"
      type="button"
      aria-label="마이 메뉴 열기"
    >
      <img src="./assets/images/img-user-03.jpg" alt="유저 프로필 사진" />
    </button>

    <div class="my-menu-contents">
      <ul class="my-menu-list">
        <li class="my-menu-item">
          <a href="/">마이페이지</a>
        </li>
        <li class="my-menu-item">
          <a href="/">나의 쇼핑</a>
        </li>
        <li class="my-menu-item">
          <a href="/">이벤트</a>
        </li>
        <li class="my-menu-item">
          <button type="button">로그아웃</button>
        </li>
      </ul>
    </div>
  </div>
</div>
```

- 로그인을 안한3 경우

```html
<div class="gnb-button-group">
  <button
    class="gnb-icon-btn search-btn lg-hidden"
    type="button"
    aria-label="검색창 열기"
  >
    <i class="ic-search" aria-hidden></i>
  </button>
  <a class="gnb-icon-btn cart-btn" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart" aria-hidden></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

### 2. Sidebar

- 로그인을 한 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-03.jpg" alt="유저 프로필 사진" />
    </div>
    <strong class="username">미니</strong>
  </a>
</div>
```

- 로그인을 안한 경우

```html
<div class="sidebar-auth">
  <a class="button-40 button-outlined" href="/">로그인</a>
  <a class="button-40 button-primary" href="/">회원가입</a>
</div>
```

### 3. Avatar

- 프로필 이미지가 있는 경우

```html
<a href="/">
  <div class="avatar-24">
    <img src="./assets/images/img-user-03.jpg" alt="유저 프로필 사진" />
  </div>
  <strong class="username">유저이름</strong>
</a>
```

- 프로필 이미지가 없는 경우

```html
<a href="/">
  <div class="avatar-24"></div>
  <strong class="username">유저이름</strong>
</a>
```

```scss
%avatar {
  background-image: url(./assets/images/img-user-default.png);
}
```
