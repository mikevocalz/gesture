/* jsxImportSource react*/

import { StatusBar } from 'expo-status-bar'

import { useNavigation } from 'expo-router'

import { FontAwesome } from '@expo/vector-icons'
import DetailsCarousel from '../DetailsCarousel'


import React, {useState, useLayoutEffect, useEffect, useCallback } from 'react'
import { ScreenScrollView } from '../ScreenScrollView'
import { useParams, useRouter, useSearchParams } from 'solito/navigation'

import { View, Text, Dimensions, Pressable, Platform, ImageBackground } from 'react-native'
import { SolitoImage } from 'solito/image'
import { Link } from 'solito/link'

import { Carousel } from 'react-responsive-carousel'

import Hero from '../hero/hero.web'
import ImageThumbCarousel from '../ImageThumbCarousel'
import StarRatingComponent from 'react-star-rating-component'

import {H4,H3, H2, Div, Span, A , P} from '@expo/html-elements'
import Review from '../Review'
import {reviews} from 'app/utils/reviewData'
import { useSanityStore } from 'app/store/sanityStore'


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
        headerRight: () => (
          <Pressable
            className="h-[40px] w-[40px]  rounded-full  md:h-[55px] md:w-[55px]"
            onPress={() => null}
          >
            {({ pressed }) => (
              <FontAwesome
                onPress={() => back()}
                name="heart"
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
     

      <DetailsCarousel images={imagesData} />
    
    


       <Text className="mt-3 text-[15px] leading-7">{product?.description}</Text>
            <View
              style={{}}
              className="my-0 flex flex-row  flex-wrap  items-center space-x-3 space-y-3 md:my-3 md:h-7 md:flex-row md:space-y-0 "
            >
              <View className="mt-3 flex h-4 flex-row items-center space-x-2 md:mt-0">
                <StarRatingComponent
                  name="rate1"
                  starCount={5}
                  value={rating}
                  starColor="#fdbf2e"
                  onChange={handleChange}
                />
                <H4 style={{ marginTop: 20 }} className="text-gray-700">
                  4 Ratings
                </H4>
              </View>
              <View className="invisible h-[30px] w-[1px] bg-gray-500 md:visible" />
              <H3 className="relative ml-[90px] rounded-md bg-[#46c4f6] px-3 py-1 text-sm font-bold text-white drop-shadow-xl">
                Gesture Recommended
              </H3>
            </View>

            <View className="mt-2 flex w-full flex-row items-center justify-between space-x-3 px-2">
              <Text className="my-2 text-2xl font-bold text-black">
                ${product?.price || '49.99'}
              </Text>

              <Pressable className="my-5  w-[250px] items-center rounded-xl bg-[#2b089f] py-3 drop-shadow-xl hover:scale-105 md:w-[220px] md:py-[10px]">
                <Text className="text-xl font-bold text-white">
                  Pick This Gesture
                </Text>
              </Pressable>
            </View>

            <View className="mb-3 w-full space-y-3">
              {/* <P className="text-md font-bold leading-6">
              Cakes in this category will be:
              </P> */}

              <A className='mt-6'>
                - 8"-11", bakery fresh, cake, from a bakery like 'Magnolia
                Bakery', 'Nothing Bundt Cakes'
              </A>
              <A>- Various types depend on market availability </A>

              <A>- May contain nuts and gluten </A>

              <A>
                - Sorry, no vegan option at this time As part of the price of
                this gesture, customers receive:
              </A>
              <A>- Free delivery and a customer satisfaction guarantee </A>

              <A>
                - Delivery by hand for local orders, and express shipping for
                statewide deliveries
              </A>
              <A>
                - Your own personalized e-message/signature included with gift{' '}
              </A>
              <A>- An amazing selfie of whatever you want included with gift</A>
            </View>

            <View className="my-4 h-[1px] w-full bg-gray-500" />

            <View className="flew-row w-full space-x-3">
              <View className="mt-3 flex-col space-y-2">
                <P>
                  NO HIDDEN FEES GUARANTEE NO HIDDEN SURPRISE GUARANTEE. Price
                  listed is all inclusive. (Includes delivery, shipping, and any
                  other fees). Just a heads up, product selection/s may vary
                  based on the local vendor availability in the delivery area.
                </P>

                <A>Some items may differ from the in-store price.</A>
              </View>
            </View>
          </Div>
        </View>
      </View>

      <View className="mb-10 mt-4 flex w-full px-4 pb-[300px]">
        <H3>Reviews:</H3>
        {reviews.map((review, idx) => (
          <Review
            key={idx}
            id={review.id}
            name={review.name}
            title={review.title}
            joinDate={review.joinDate}
            reviewDate={review.reviewDate}
            textOne={review.textOne}
            textTwo={review.textTwo}
          />
        ))}
      </View>
    </ScreenScrollView>
  )
}

// <DetailsCarousel images={imagesData} />
