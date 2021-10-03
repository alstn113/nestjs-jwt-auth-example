참고
https://youtu.be/2n3xS89TJMI

nest new <project-name>
npm run start:dev

tsconfig.json에

      "paths": {
        "@/*": ["./src/*"]
      }

prettier 수정

      {
        "singleQuote": true,
        "semi": true,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 100
      }

eslint rules에 추가

    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],

app폴더를 만들고 거기에 app.module.ts 넣음, 나머지는 삭제

pipe는 validation이라고 생각하기

@/teacher/student.controller.ts에서 StudentService를 사용하기 때문에
module에서 service export하고 module import 해서 받아옴

database 관련
npm install @nestjs/typeorm typeorm mysql2

ormconfig.ts 만들고 데이터베이스 정보 module.exports 해줌

custom repository를 이용해서 service와 repository를 분리시킴
참고 https://gaemi606.tistory.com/entry/NestJS-API-%EB%A7%8C%EB%93%A4%EA%B8%B0-1-Repository?category=744526
참고2 https://clownhacker.tistory.com/250

database number인가 string인가 그래도 숫자니까 number로

put은 자원의 전체 교체, 모든 필드 필요, 일부 전달 시 전달한 필드외 모두 null
patch는 자원의 부분 교체
