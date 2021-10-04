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
        "printWidth": 80,
        "tabWidth": 2,
        "useTabs": false,
        "semi": true,
        "singleQuote": false,
        "quoteProps": "consistent",
        "trailingComma": "es5",
        "bracketSpacing": true,
        "arrowParens": "always",
        "endOfLine": "lf"
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

pipe사용하기

      npm i class-validator class-transformer

npm i @nestjs/config
사용해서 config 관리하기

    ConfigModule.forRoot({
      isGlobal: true, // 다른 곳에서 ConfigModule 안 불러와도 사용 가능
      envFilePath: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.test", // 사용할려는 .env 이름
      ignoreEnvFile: process.env.NODE_ENV === "prod", // 사용하지않고 싶을 때, 배포 시 환경변수를 따로 입력하니까
      load: [configuration], // load 하는 방법(배열)
    }),

private readonly config: ConfigService, // ConfigService 불러오기하고
this.config.get('TOKEN_SECRET') 이런 식으로 불러옴

출처 : https://darrengwon.tistory.com/965 , https://youtu.be/dZd9tZe5w3M
