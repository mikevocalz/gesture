/* jsxImportSource react*/
import React, { useLayoutEffect, useEffect } from 'react'
import { ScreenScrollView } from '../ScreenScrollView'
import { useParams, useSearchParams } from 'solito/navigation'
import { View, Text, Dimensions, Pressable, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { SolitoImage } from 'solito/image'
import { Link } from 'solito/link'
import { useRouter } from 'solito/navigation'

import { useNavigation } from 'expo-router'

import { FontAwesome } from '@expo/vector-icons'
import DetailsCarousel from '../DetailsCarousel'

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

export default function ProductScreen({ route }) {
  const { name, title, id, images } = useUserParams()

  const navigation = useNavigation()
  const isWeb = Platform.OS === 'web'
  const { push, back } = useRouter()

  useLayoutEffect(() => {
    Platform.OS !== 'web' &&
      navigation?.setOptions({
        headerLeft: () => (
          <Pressable
            className="h-[40px] w-[40px]  rounded-full  md:h-[55px] md:w-[55px]"
            onPress={() => back()}
          >
            {({ pressed }) => (
              <FontAwesome
                onPress={() => back()}
                name="chevron-left"
                size={isTab ? 34 : 30}
                color={'#fff'}
                style={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        ),
        headerShadowVisible: true,
        headerShown: true,
        headerTransparent: true,
        headerTitle: title,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2b089f',
          height: 120,
        },
      })
  }, [])

  const { width } = Dimensions.get('screen')
  const isTab = width >= 600
  const sqWidth = width > 768 ? 100 : 136
  const sqHeight = width < 768 ? 400 : 600

  return (
    <ScreenScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="always"
      useWindowScrolling
      scrollEventThrottle={16}
      nestedScrollEnabled={true}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled
      contentContainerClassName="pb-[100px] md:pb-[300px] flex bg-white"
      className="h-full w-full flex-1"
    >
      {/* <SolitoImage
          alt={'image-1'}
          contentFit='cover'
          src={String(imagesData[0]?.src)}
          style={{
            resizeMode:'cover',
            position: 'absolute',
            top: 0,
            left:0,
            right:0,
            width: width,
            height: sqHeight,
          
            maxWidth: 1280,
          }}
          width={width}
          height={sqHeight}
        /> */}

      <DetailsCarousel images={imagesData} />
      <View>
        <Text className="text-black">is Web</Text>
      </View>
    </ScreenScrollView>
  )
}

// <DetailsCarousel images={imagesData} />
