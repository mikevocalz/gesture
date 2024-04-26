/** @jsxImportSource react */
import './globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { StylesProvider } from './styles-provider'
import { ReactNode } from 'react'
import { Provider } from "app/provider";
import WebLayout from 'app/layout/web'
import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'Gesture',
  description: 'Send gifts using a mobile phone number, email address or a gesture g-handle.',
  icons: {
    icon: './favicon.ico',
  },
}

//const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Analytics />
        <StylesProvider>
          <Provider>
            <NextTopLoader
              color="#fdbf2e"
              shadow="0 0 10px #46c4f6,0 0 5px #46c4f6"
              initialPosition={0.08}
              crawlSpeed={200}
              height={4}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
            />
            <WebLayout>{children}</WebLayout>
          </Provider>
        </StylesProvider>
      </body>
    </html>
  )
}
