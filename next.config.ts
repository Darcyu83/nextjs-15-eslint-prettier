import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  eslint: {
    // default : 전체 폴더
    // dirs: ['./src/**'],
  },

  i18n: {
    locales: ['en-US', 'ko-KR'],
    defaultLocale: 'en-US',

    //! 필요할때 설정
    // // This is a list of locale domains and the default locale they
    // // should handle (these are only required when setting up domain routing)
    // // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: 'example.nl',
    //     defaultLocale: 'nl-NL',
    //   },
    //   {
    //     domain: 'example.fr',
    //     defaultLocale: 'fr',
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
  },
};

export default nextConfig;
