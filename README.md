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
