# NextJs 15 - setting

## LF as end of line character

[LF vs CRLF](https://nausaf.hashnode.dev/lf-vs-crlf-configure-git-and-vs-code-to-use-unix-line-endings)

reason why :
when editors and text tools on Unix-based systems load files which were authored in Windows and use CRLF line endings, they can have trouble displaying or processing them.

settings > search["eol"] > set "\n"

## CSS : tailwind

### init : NextJs 공식사이트 참고

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

## Eslint + Prettier

### [NextJs 공식홈페이지 ESLINT 설정](https://nextjs.org/docs/app/api-reference/config/eslint)

- npm install --save-dev prettier
- npm install --save-dev prettier-plugin-tailwindcss

- npm install --save-dev eslint-config-prettier
- npm i --save-dev @next/eslint-plugin-next

- 깃 스테이징 ESLINT 검사
- npm install --save-dev husky
- npm install --save-dev lint-staged
  -> .lintstagedrc.js

### icon

- lucide
  npm install lucide-react
