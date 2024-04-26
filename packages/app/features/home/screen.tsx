/* jsxImportSource react*/
'use client';

import {
  View,
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  Platform,
  ActivityIndicator,
} from 'react-native'
import { ScreenScrollView } from 'app/components/ScreenScrollView'
import { Span, H1 } from '@expo/html-elements'
import HomeCards from 'app/components/HomeCards'
import { Button } from 'app/components/Button'
import { SolitoImage } from 'solito/image'
import { useRouter } from 'solito/navigation';
import { useState, useEffect, useReducer } from 'react';
//import { useRouter } from 'solito/router'
import {urlFor} from '../../../../apps/expo/utils/helpers'
import HeroWeb from '../../components/hero/hero.web'
import Hero from '../../components/hero/hero.native'

import { createClient } from '@sanity/client'
import { config } from 'app/sanity/sanityClient.web';
import { categoryQuery, congratsQuery, heroQuery, productQuery } from 'app/sanity/queries';
import { MotiView,  } from 'moti';
import { Skeleton } from 'moti/skeleton'


type HomeProps = {
  title?: string,
  image?: string,
  _id?: string
}



const Spacer = ({ height = 16 }) => <View style={{ height }} />

export function HomeScreen() {
  const { width } = Dimensions.get('screen')
  const isWeb = Platform.OS === 'web'
  const isTab = width >= 600
  const sqWidth = width < 768 ? 115 : 176



  const [productData, setProductData] = useState([])
  const [heroData, setHeroData] = useState([])
  const [categories, setCategories] = useState([])
const [congrats, setCongrats] = useState([])

  const [dark, toggle] = useReducer((s) => !s, false)

  const colorMode = dark ? 'dark' : 'light'


async function callApi() {

    const client = createClient(config)

    const congrats = await client.fetch(congratsQuery)
    const products =  await client.fetch(productQuery)
    const hero = await client.fetch(heroQuery)
    const categories = await client.fetch(categoryQuery)


    setProductData(products)
    setHeroData(hero)
    setCategories(categories)
    setCongrats(congrats)

    //console.log('response', data.products)
  }

  useEffect(() => {
    callApi()
  }, [])


  const heroImages = heroData.filter((img:any) => img.image)
  //console.log('me: ', heroImages)

  const { push } = useRouter()

  const RenderItem = ({ title, image, _id }: HomeProps) => (
    <Pressable
      className="flex h-[115px] max-h-[300px] drop-shadow-md hover:scale-105"
      onPress={() => push('/two')}
    >
      <View
        className={
          ' mx-4 flex aspect-square h-[115px] w-[115px] items-center justify-center overflow-hidden rounded-xl  bg-zinc-100 md:mx-6  md:h-[176px] md:w-[176px]  '
        }
      >
        <SolitoImage
          alt={String(_id)}
          priority
          unoptimized
          className="flex h-[1115px] w-[115px] md:h-[176px] md:w-[176px] "
          contentFit="cover"
          src={image}
          width={sqWidth}
          height={sqWidth}
        />
      </View>
      <View className="h-[80px]">
        <Text className="mt-2 text-center font-medium">{title}</Text>
      </View>
    </Pressable>
  )

  const RenderFooter = () => (
    <Pressable
      className={`${isTab ? '' : ''} mx-2 mx-[30px] flex aspect-square h-[100px] w-[100px] items-center justify-center  rounded-xl bg-zinc-500 p-5 md:h-[136px] md:w-[136px]  `}
    >
      <Text className="font-bold text-black">View More</Text>
    </Pressable>
  )

  const RenderHeader = () => (
    <View className="flex w-full flex-col gap-y-[4px] px-3 md:gap-y-[8px]">
      <Text className="mt-4 text-2xl font-bold text-black md:text-3xl">
        Hi Mike,
      </Text>
      <Text className="mb-7 text-2xl font-bold text-black md:text-3xl">
        What's the Vibe or <Span className="text-[#46c4f6]">Occassion</Span>?
      </Text>
    </View>
  )
 

    if (productData.length === 0  && heroData.length === 0){
    return (
      <View className="min-h-full w-full max-w-7xl overflow-hidden items-center self-center bg-zinc-100">
        <MotiView
          transition={{
            type: 'timing',
          }}
          style={[styles.container, styles.padded]}
          animate={{ backgroundColor: '#fff' }}
        >
          <Skeleton
            radius={16}
            colorMode={colorMode}
            height={300}
            width={'100%'}
          />
          <Spacer height={10} />
          <Skeleton colorMode={colorMode} width={250} height={8} />
          <Spacer height={5} />
          <Skeleton colorMode={colorMode} width={'100%'} height={8} />
          <Spacer height={5} />
          <Skeleton colorMode={colorMode} width={'100%'} height={8} />
          <Spacer height={5} />
          <Skeleton colorMode={colorMode} width={'100%'} height={8} />
          <Spacer height={20} />

          <View className="flex-row space-x-5">
            {[0, 1, 2, 3, 4, 5].map((item, idx) => (
              <Skeleton
                key={idx}
                colorMode={colorMode}
                width={190}
                height={190}
              />
            ))}
          </View>

          <Spacer height={20} />
          <Skeleton colorMode={colorMode} width={'30%'} height={16} />
          <Spacer height={10} />

          <View className="flex-row space-x-5">
            {[0, 1, 2, 3, 4, 5].map((item, idx) => (
              <Skeleton
                key={idx}
                colorMode={colorMode}
                width={190}
                height={290}
              />
            ))}
          </View>
        </MotiView>
      </View>
    )
  }

  return (
    <ScreenScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="always"
      useWindowScrolling
      scrollEventThrottle={16}
      nestedScrollEnabled={true}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled
      contentContainerClassName="md:pb-[300px] pt-[10px] flex bg-white items-center"
      className="h-full w-full max-w-7xl self-center pb-[300px] "
    >
      {isWeb ? (
        <HeroWeb heroImages={heroImages} />
      ) : (
        <Hero heroImages={heroImages} />
      )}

      <RenderHeader />

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled
        scrollEventThrottle={16}
        data={categories}
        horizontal={true}
        className="h-[220px] max-h-[280px] w-full  md:h-[300px]"
        contentContainerClassName="flex pt-4  ml-4 md:mt-0 mt-2 min-w-full md:mb-[50px] flex "
        renderItem={({ item }) => (
          <RenderItem _id={item._id} title={item.title} image={item.image} />
        )}
        keyExtractor={(item: string) => item._id}
        //ListFooterComponent={() => <RenderFooter />}
      />

      <HomeCards title="Congrats" data={congrats} />
      <HomeCards title="Netflix & Chill" data={productData.reverse()} />
      <HomeCards title="Thank You" data={congrats} />
    </ScreenScrollView>
  )
}


const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width:'100%'
  },
  padded: {
    padding: 16,
  },
})