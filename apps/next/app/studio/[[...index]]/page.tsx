'use client'
import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { StudioLayout, StudioProvider } from 'sanity'
import config from 'app/sanity/sanity.config'
import { Div } from "@expo/html-elements"

export default function StudioPage() {
  return (
    <Div className="h-full w-full">
      <NextStudio config={config}>
        <StudioProvider config={config}>
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </Div>
  )
}
