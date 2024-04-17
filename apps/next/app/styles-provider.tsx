// @ts-nocheck
/** @jsxImportSource react */
'use client'
import React, { ReactNode } from 'react';
import { useServerInsertedHTML } from 'next/navigation'
import { StyleSheet } from 'react-native'

const fonts = [
  'EntypoFont',
  'AntDesignFont',
  'EvilIconsFont',
  'FeatherFont',
  'FontAwesomeFont',
  'FoundationFont',
  'IoniconsFont',
  'MaterialCommunityIconsFont',
  'MaterialIconsFont',
  'OcticonsFont',
  'SimpleLineIconsFont',
  'ZocialFont',
  'MaterialIcons',
  'Poppins',
  'BebasNeue-Bold',
]

const customFontCss = fonts
  .map(
    (font) => `
    @font-face {
        font-family: '${font}';
        src: url('/fonts/${font}.ttf');
    }
`,
  )
  .join('\n')
export const style = `
${customFontCss}
`
export function StylesProvider({ children }: { children: ReactNode }) {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet()
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />,
         <style
        dangerouslySetInnerHTML={{ __html: style}}
      />
    )
  })
  return <>{children}</>
}
