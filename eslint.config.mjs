import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    // settings: {
    //   next: {
    // 여러 프로젝트 함께 사용하는경우(monorepo) 1개의 next설치 시 경로 명시
    //     rootDir: 'packages/my-app/',
    //   },
    // },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  }),

  // oriinal code ...compat.extends('next/core-web-vitals', 'next/typescript', 'next'),
];

export default eslintConfig;
