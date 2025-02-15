import type { Metadata } from 'next';
import {
  // Geist, Geist_Mono
  Outfit,
} from 'next/font/google';
import './globals.css';
import NextAuthSessionProvider from '@/components/provider/NextAuthSessionProvider';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import Header from '@/components/layout/Header';
import { Toaster } from '@/components/ui/toaster';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const fontOutfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <NextAuthSessionProvider session={session}>
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`${fontOutfit.className} relative h-screen`}
        >
          <div className='flex flex-col gap-4'>
            {/* Header */}
            <header className='fixed z-20 flex h-fit min-h-[var(--layout-header-height)] w-full items-center justify-between bg-white p-2 shadow-lg'>
              <Header />
            </header>

            {/* Aside */}
            {/* <aside className='z-1 sticky left-0 top-[65px] h-[calc(100vh-65px)] bg-[#444450] p-4 text-white'>
              <SideNavBar />
            </aside> */}

            {/* Main */}
            <main className='mt-[var(--layout-header-height)] h-fit w-full p-4'>
              {children}
            </main>
          </div>

          {/* <div className='absolute'>{modal}</div> */}

          {/* <div className='absolute right-4 top-0 z-10 flex h-screen items-end bg-white py-9'>
            <SideNavBar />
          </div> */}

          <Toaster />
        </body>
      </NextAuthSessionProvider>
    </html>
  );
}
