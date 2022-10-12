# 두뇌 보완 퀴즈 🧠


[두뇌 보완 퀴즈 URL](https://reactquiz-virid.vercel.app/)

---

## 프로젝트 설명
다양한 영어 퀴즈를 풀어보고 오답노트까지 확인할 수 있는 웹앱 입니다.

---

## 프로젝트 실행 방법

1. git clone

```bash
git clone https://github.com/KKingmo/Lets-quiz.git
```

2. install

```bash
yarn install
```

3. build

```bash
yarn build
```

4. start

```bash
yarn start
```

5. test

```bash
yarn test
```

---

## 기술스택 및 라이브러리

- React.js
- Next.js
- TypeScript
- Recoil
- Emotion
- Victory
- axios
- cypress
- Vercel
- Antd
- React-quill

---

## 폴더 구조

```bash
.
├── 📂cypress
│   └── 📂e2e
│       └── 📜spec.cy.ts  // 테스트 코드
├── 📂pages
│   └── 📂quiz⎯📂detail──📂[id] //퀴즈 상세보기 페이지
│        ├────📂result // 퀴즈 결과보기 페이지
│        ├────📂retry // 퀴즈 다시풀기 페이지
│        └────📂reviewNote // 퀴즈 오답노트 페이지
│
│
├── 📂src
│   ├── 📂commons
│   │   ├── 📂axiosInstance // optntdb api 연결
│   │   ├── 📂hooks       // 커스텀 훅
│   │   └── 📂store       // recoil state 함수
│   └── 📂components
│       ├── 📂commons──📂layout──📂header
│       │              │
│       │              └─────────📂quizTimer 
│       └── 📂units── 📂main   
│             └─────── 📂quiz─────📂detail
│                      └──────────📂item
│                      └──────────📂result
│                      └──────────📂reviewNote
└── 📂styles
        ├── 📜globalStyles.ts  // 전역 스타일
        └── 📜media.ts    // 미디어 쿼리 tablet, mobile size 데이터
```

---

