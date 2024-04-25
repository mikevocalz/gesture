'use client'
import { Div } from "@expo/html-elements";
import { NextStudio } from 'next-sanity/studio'
import config from 'app/sanity/sanity.config'

export const dynamic = 'force-static'

export default function StudioPage() {
  return (    
  <Div className='w-full h-full'>
    <NextStudio config={config} />
  </Div>
  )
}
