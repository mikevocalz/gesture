/* jsxImportSource react*/

import React, { useLayoutEffect, useEffect } from 'react'
import { ScreenScrollView } from '../ScreenScrollView'
import { useParams, useSearchParams } from 'solito/navigation'
import { View, Text, Dimensions, Pressable, Platform, ImageBackground } from 'react-native'
import { SolitoImage } from 'solito/image'
import { Link } from 'solito/link'
import { useRouter } from 'solito/navigation'

import { useNavigation } from 'expo-router'
import { Carousel } from 'react-responsive-carousel'

import { FontAwesome } from '@expo/vector-icons'
import DetailsCarousel from '../DetailsCarousel'
import Hero from '../hero/hero.web'


const useUserParams = useParams<{
  id: number
  name: string
  title: string
  images: any
}>

const imagesData = [
  {
    id: 1,
    src: 'https://i.ibb.co/zNcmvKM/mikevocalz-Product-image-of-a-chocolate-cake-Use-a-high-resolu-7934e9b9-47d3-44d8-8764-48eb0926f234.jpg',
  },
  {
    id: 2,
    src: 'https://i.ibb.co/XfQ4DT9/mikevocalz-Product-image-of-a-chocolate-cake-Use-a-high-resolu-7934e9b9-47d3-44d8-8764-48eb0926f234.jpg',
  },
  {
    id: 3,
    src: 'https://i.ibb.co/qLSnCwz/mikevocalz-Product-image-of-a-chocolate-cake-Use-a-high-resolu-7934e9b9-47d3-44d8-8764-48eb0926f234.jpg',
  },
  {
    id: 4,
    src: 'https://i.ibb.co/nqG0BST/mikevocalz-Product-image-of-a-chocolate-cake-Use-a-high-resolu-7934e9b9-47d3-44d8-8764-48eb0926f234.jpg',
  },
]

export default function ProductScreen({ route , heroImages}) {
  const { name, title, id, images } = useUserParams()

  const isWeb = Platform.OS === 'web'

  const { width } = Dimensions.get('screen')
  const isTab = width >= 600
  const sqWidth = width > 768 ? 100 : 136
  const sqHeight = width < 768 ? 400 : 600

    const pWidth = Dimensions.get('screen').width
    const pHeight = Dimensions.get('screen').height

    //const heroImages = imagesData.filter((img: string) => img.src)

  return (
    <ScreenScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="always"
      useWindowScrolling
      scrollEventThrottle={16}
      nestedScrollEnabled={true}
      contentContainerStyle={{ flexGrow: 1, alignSelf: 'center' }}
      scrollEnabled
      contentContainerClassName="pb-[100px] md:pb-[300px] flex bg-white self-center"
      className="flex-1 min-h-screen w-full max-w-7xl  self-center items-center bg-slate-500"
    >
      

      <View className="mb-[20px] aspect-[16/10] flex-1 max-h-[600px] w-full overflow-hidden rounded-xl">
        <Carousel
          showArrows={false}
          showIndicators
          showThumbs={false}
          autoPlay
          emulateTouch={true}
          showStatus={false}
          interval={10000}
          dynamicHeight={true}
          infiniteLoop
          width={'100%'}
          swipeable
        >
          {imagesData?.map((photo, index) => (
            <ImageBackground
              key={index}
              resizeMode="cover"
              width={pWidth}
              alt={String(photo.id)}
              source={photo?.src}
              style={{
               // flex: 1,
                width: '100%',
                maxWidth: 1280,
                maxHeight: 600,
                aspectRatio: 16 / 10,
              }}
            />
          ))}
        </Carousel>
      </View>

      <View className='max-w-7xl w-full items-center'>
        <Text className="text-black">Hello Web</Text>
      </View>
    </ScreenScrollView>
  )
}
