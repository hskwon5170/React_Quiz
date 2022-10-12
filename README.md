# 두뇌 보완 퀴즈 🧠


[두뇌 보완 퀴즈 URL](https://reactquiz-virid.vercel.app/)

---

## 프로젝트 설명
다양한 영어 퀴즈를 풀어보고 오답노트까지 확인할 수 있는 웹앱 입니다.

---

## 프로젝트 실행 방법

1. git clone

```bash
git clone git@github.com:hskwon5170/React_Quiz.git
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
│        ├────📂result          // 퀴즈 결과보기 페이지
│        ├────📂retry           // 퀴즈 다시풀기 페이지
│        └────📂reviewNote      // 퀴즈 오답노트 페이지
│
│
├── 📂src
│   ├── 📂commons
│   │   ├── 📂axiosInstance // optntdb api 연결
│   │   ├── 📂hooks         // 커스텀 훅
│   │   └── 📂store         // recoil state 함수
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
        └── 📜media.ts         // 미디어 쿼리 tablet, mobile size 데이터
```

---

## 시연 영상
1.메인페이지
- 사용자가 원하는 퀴즈의 카테고리를 설정할 수 있습니다.
![Oct-12-2022 15-21-14](https://user-images.githubusercontent.com/104052466/195265324-f70a899d-7d23-44cf-add5-decc833eb038.gif)


2.퀴즈 풀기 페이지
- 퀴즈의 카테고리를 설정한 이후, GO 버튼을 눌러 퀴즈를 풀 수 있습니다.
- 사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있습니다.
- 답안을 선택하면 맞았는지 틀렸는지 결과를 바로 알 수 있습니다.
- 답안을 선택해야 다음 문제로 넘어갈 수 있습니다.
![Oct-12-2022 15-23-29](https://user-images.githubusercontent.com/104052466/195265710-ce2e46a7-950c-47a8-9b43-d0cdb6b6dd0b.gif)

3.퀴즈 결과 페이지
- 모든 문항을 다 풀면, 풀이에 소요된 시간을 알 수 있습니다.
- 문제 풀이 결과를 파이 그래프를 이용해 한눈에 파악할 수 있습니다.
- 하단의 버튼을 클릭하여 문제를 다시 풀거나, 오답노트를 작성하는 페이지로 이동할 수 있습니다.
![퀴즈결과](https://user-images.githubusercontent.com/104052466/195266100-30470eb4-3b3f-4dce-9ba2-33f508b576b1.gif)

4.오답노트 작성
![오답노트 작성](https://user-images.githubusercontent.com/104052466/195266351-1d95403d-06a2-4631-970f-8c8bdae5cc87.gif)

5.오답노트 보기 페이지
![오답노트 보기 페이지](https://user-images.githubusercontent.com/104052466/195266648-66c92ae7-e67f-485d-8f96-3d9b0cb17f45.gif)



