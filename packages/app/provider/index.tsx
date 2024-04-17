/** @jsxImportSource react */
'use client'
import { Platform, View } from 'react-native'
import { SafeArea } from './safe-area'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ReactNode } from 'react'
//import { enableExperimentalWebImplementation } from 'react-native-gesture-handler'


export function Provider({ children }: { children: ReactNode }) {
  
  return (
      <SafeArea>{children}</SafeArea>
  )
}
