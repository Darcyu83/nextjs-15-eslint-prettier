import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser } from './middleware/auth';
// 예제 ::
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // headers에서 값 가져오기

  await authenticateUser(req.headers.get('Authenticate') ?? '');

  // cookie 다루기

  const myCookie = req.cookies.get('yuds');
  console.log('myCookie ==== ', myCookie);
  const allCookies = req.cookies;
  console.log('allCookies ==== ', allCookies);

  // reqeust cookie 다루기
  req.cookies.has('nextjs'); // => true
  req.cookies.delete('nextjs');
  req.cookies.has('nextjs'); // => false

  // response cookie 다루기
  // const res = NextResponse.next();
  // path matcher에서 설정한 값 없거나 있으면 리디렉션 할 경우
  const res = NextResponse.redirect(new URL('/user', req.url));

  res.cookies.set('yuds', 'yu dae seok');
  console.log('res.cookies.get ==== 1', res.cookies.get('yuds'));
  res.cookies.set({ name: 'vercel', value: 'fast', path: '/vercel' });
  console.log('res.cookies.get ==== 2', res.cookies.get('vercel'));

  console.log('req.url ==== ', req.url);

  // return NextResponse.redirect(new URL('/user', req.url));
  return res;
}

// 단순하게 url 감지해서
// export const config = {
//   matcher: ['/tier/:path'], // catch :: /tier/a
// };

// request headers 에 값 감지해서
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // '/tier',
    // {
    //   source: '/tier',
    //   missing: [
    //     // 아래 내용이 없으면 실행
    //     { type: 'header', key: 'next-router-prefetch' },
    //     { type: 'header', key: 'purpose', value: 'prefetch' },
    //   ],
    // },

    // {
    //   source: '/tier',
    //   has: [
    //     // 아래 내용이 있으면 실행
    //     { type: 'header', key: 'next-router-prefetch' },
    //     { type: 'header', key: 'purpose', value: 'prefetch' },
    //   ],
    // },

    {
      source: '/tier',
      has: [{ type: 'header', key: 'x-present' }],
      missing: [
        // { type: 'header', key: 'Authenticate' }, // jwt token 유무에 따라서
        // { type: 'header', key: 'x-missing', value: 'prefetch' },
      ],
    },
  ],
};
