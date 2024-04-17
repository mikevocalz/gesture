'use client'
import { ReactNode, ReactElement, useState } from 'react'
import { View, Text, useWindowDimensions, Platform } from 'react-native'
import { WebHeader } from "app/components/WebHeader";
import WebFooter from "app/components/WebFooter";
import dynamic from "next/dynamic";
import { useRouter } from 'solito/router';
import { usePathname } from 'solito/navigation';


function WebLayout({ children }): ReactElement<ReactNode> {
  const isWeb = Platform.OS === 'web'
  const [footer, showFooter] = useState(true);

  const pathname = usePathname()

  return (
    <View className=" flex min-h-full w-screen bg-gray-100 pt-[72px]">
      {pathname !== '/login' && <WebHeader />}

      <View className="-z-40 flex-1">{children}</View>

      {/* {pathname !== '/login' && <WebFooter />} */}
      <WebFooter />
    </View>
  )
}



export default dynamic(() => Promise.resolve(WebLayout), { ssr: false })
