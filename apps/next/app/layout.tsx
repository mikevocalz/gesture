/** @jsxImportSource react */
import { ReactNode } from 'react';
import './globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { StylesProvider } from './styles-provider'
import { Provider } from "app/provider";
import WebLayout from 'app/layout/web'

import type { Metadata } from 'next'

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
        <StylesProvider>
          <Provider>
            <WebLayout>{children}</WebLayout>
          </Provider>
        </StylesProvider>
      </body>
    </html>
  )
}
