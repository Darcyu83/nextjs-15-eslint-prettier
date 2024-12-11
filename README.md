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

- npm install --save-dev prettier
- npm install --save-dev prettier-plugin-tailwindcss

- npm install --save-dev eslint-plugin-next
