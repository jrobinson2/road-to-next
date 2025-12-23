import './globals.css';

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

import { homePath, ticketsPath } from '@/paths';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap'
});

const sourceSerif4 = Source_Serif_4({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap'
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'The Road to Next',
  description: 'My Road to Next application ...'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif4.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <nav>
          <ul
            className="supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between"
          >
            <li>
              <Link
                href={homePath()}
                className={buttonVariants({ variant: 'outline' })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={ticketsPath()}
                className={buttonVariants({ variant: 'outline' })}
              >
                Tickets
              </Link>
            </li>
          </ul>
        </nav>
        <main
          className="min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8
            bg-secondary/20
            flex flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
