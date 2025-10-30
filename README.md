# 구구단 곱셈표 - React 버전

React와 Vite로 구현된 구구단 곱셈표 애플리케이션입니다.

## 기능

- 🔢 2단부터 9단까지 구구단 표시
- 📊 전체 보기 / 단일 단 선택 보기 모드
- 🎨 모던하고 반응형 디자인
- ✨ 호버 효과와 애니메이션

## 설치 및 실행

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### 빌드 결과 미리보기
```bash
npm run preview
```

## 기술 스택

- React 18
- Vite 5
- Pure CSS (no CSS framework)

## 프로젝트 구조

```
/
├── src/
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── App.css          # 앱 스타일
│   ├── main.jsx         # 앱 엔트리 포인트
│   └── index.css        # 글로벌 스타일
├── public/
│   └── vite.svg         # Vite 아이콘
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 설정
└── vite.config.js       # Vite 설정
```

## 변경 이력

- v1.0.0: 순수 HTML/JS 버전에서 React로 마이그레이션
