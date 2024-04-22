'use client'
import { ReactNode, ReactElement, useState } from 'react'
import { View, Text, useWindowDimensions, Platform } from 'react-native'
import { WebHeader } from "app/components/WebHeader";
import WebFooter from "app/components/WebFooter";
import dynamic from "next/dynamic";
import { useRouter } from 'solito/router';
import { usePathname } from 'solito/navigation';
import { Main, Div }from '@expo/html-elements'


function WebLayout({ children }): ReactElement<ReactNode> {
  const isWeb = Platform.OS === 'web'
  const [footer, showFooter] = useState(true);

  const pathname = usePathname()

  return (
    <Div className=" flex min-h-full w-screen bg-gray-100 pt-[72px]">
     <WebHeader />

      <Main className="-z-40 flex-1">{children}</Main>

 
      <WebFooter />
    </Div>
  )
}



export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })
