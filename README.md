# 구구단 곱셈표 - React 버전

리액트로 구현한 인터랙티브 구구단 곱셈표 애플리케이션입니다.

## 기능

- 📊 **전체 보기**: 2단부터 9단까지 모든 구구단을 한 번에 표시
- 🎯 **단 선택**: 원하는 특정 단만 선택해서 보기
- 🎨 **모던한 UI**: 그라디언트와 애니메이션을 활용한 아름다운 디자인
- 📱 **반응형**: 모바일, 태블릿, 데스크톱 모든 화면에 최적화

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 애플리케이션을 확인하세요.

### 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

### 프로덕션 미리보기

```bash
npm run preview
```

## 기술 스택

- ⚛️ React 18
- ⚡ Vite
- 🎨 CSS3 (Gradient, Animations)

## 프로젝트 구조

```
gugudan-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── GugudanCard.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 컴포넌트 설명

### App.jsx
메인 애플리케이션 컴포넌트로, 전체 보기와 단 선택 모드를 관리합니다.

### GugudanCard.jsx
개별 구구단을 표시하는 재사용 가능한 카드 컴포넌트입니다.

## 라이센스

MIT
